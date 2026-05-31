const { getDB } = require('../db');
const { ObjectId } = require('mongodb');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { sendPasswordResetEmail } = require('../utils/mailer');
const { signSession, buildCookie, clearCookie } = require('../middleware/auth');

const SALT_ROUNDS = 10;
const VALID_ROLES = ['user', 'employee', 'admin'];

function toObjectId(id) {
    try { return new ObjectId(id); } catch { return null; }
}

async function verifyPassword(plain, stored, db, user) {
    if (!stored) return false;
    if (stored.startsWith('$2')) {
        return bcrypt.compare(plain, stored);
    }
    if (stored === plain) {
        const hashed = await bcrypt.hash(plain, SALT_ROUNDS);
        await db.collection('users').updateOne({ _id: user._id }, { $set: { password: hashed } });
        return true;
    }
    return false;
}

const userController = {
    register: async (req, res, data) => {
        const db = getDB();
        const email = (data.email || '').trim().toLowerCase();
        const { password, name, phone, address } = data;

        if (!email || !password || !name) {
            return res.sendJSON({ error: 'Vui lòng điền đầy đủ họ tên, email và mật khẩu' }, 400);
        }
        if (password.length < 6) {
            return res.sendJSON({ error: 'Mật khẩu phải có ít nhất 6 ký tự' }, 400);
        }

        const existing = await db.collection('users').findOne({ email });
        if (existing) return res.sendJSON({ error: 'Email đã được đăng ký' }, 400);

        const hashed = await bcrypt.hash(password, SALT_ROUNDS);
        const newUser = {
            email,
            password: hashed,
            name,
            phone: phone || '',
            address: address || '',
            role: 'user',
            createdAt: new Date()
        };

        const result = await db.collection('users').insertOne(newUser);
        res.sendJSON({ message: 'Đăng ký thành công', userId: result.insertedId }, 201);
    },

    login: async (req, res, data) => {
        const db = getDB();
        const email = (data.email || '').trim().toLowerCase();
        const { password } = data;

        if (!email || !password) {
            return res.sendJSON({ error: 'Vui lòng nhập email và mật khẩu' }, 400);
        }

        const user = await db.collection('users').findOne({ email });
        if (!user) return res.sendJSON({ error: 'Email hoặc mật khẩu không đúng' }, 401);

        const ok = await verifyPassword(password, user.password, db, user);
        if (!ok) return res.sendJSON({ error: 'Email hoặc mật khẩu không đúng' }, 401);

        const token = signSession({
            _id: user._id.toString(),
            email: user.email,
            role: user.role
        });
        res.setHeader('Set-Cookie', buildCookie(token));

        const { password: _pw, resetToken: _rt, resetTokenExpiry: _rte, ...safeUser } = user;
        res.sendJSON({ message: 'Đăng nhập thành công', user: safeUser, token });
    },

    logout: async (req, res) => {
        res.setHeader('Set-Cookie', clearCookie());
        res.sendJSON({ message: 'Đã đăng xuất' });
    },

    createUser: async (req, res, data) => {
        const db = getDB();
        const email = (data.email || '').trim().toLowerCase();
        const { password, name, phone, address, role } = data;

        if (!email || !password || !name) {
            return res.sendJSON({ error: 'Name, email and password are required' }, 400);
        }
        if (password.length < 6) {
            return res.sendJSON({ error: 'Mật khẩu phải có ít nhất 6 ký tự' }, 400);
        }

        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) return res.sendJSON({ error: 'Email đã được sử dụng' }, 400);

        const safeRole = VALID_ROLES.includes(role) ? role : 'user';
        const hashed = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = {
            name,
            email,
            password: hashed,
            phone: phone || '',
            address: address || '',
            role: safeRole,
            createdAt: new Date()
        };

        const result = await db.collection('users').insertOne(newUser);
        const { password: _pw, ...safeView } = newUser;
        res.sendJSON({ _id: result.insertedId, ...safeView }, 201);
    },

    updateProfile: async (req, res, id, data) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'ID không hợp lệ' }, 400);

        const updateFields = {};
        if (data.name !== undefined) updateFields.name = data.name;
        if (data.phone !== undefined) updateFields.phone = data.phone;
        if (data.dob !== undefined) updateFields.dob = data.dob;
        if (data.address !== undefined) updateFields.address = data.address;

        if (Object.keys(updateFields).length === 0) {
            return res.sendJSON({ error: 'Không có thông tin nào để cập nhật' }, 400);
        }

        const existing = await db.collection('users').findOne({ _id });
        if (!existing) return res.sendJSON({ error: 'Người dùng không tồn tại' }, 404);

        await db.collection('users').updateOne({ _id }, { $set: updateFields });

        const updatedUser = await db.collection('users').findOne({ _id });
        delete updatedUser.password;
        delete updatedUser.resetToken;
        delete updatedUser.resetTokenExpiry;

        res.sendJSON({ message: 'Cập nhật thành công', user: updatedUser });
    },

    getAllUsers: async (req, res) => {
        const db = getDB();
        const users = await db.collection('users').find().sort({ createdAt: -1 }).toArray();
        const sanitizedUsers = users.map(u => {
            const { password, resetToken, resetTokenExpiry, ...rest } = u;
            return rest;
        });
        res.sendJSON(sanitizedUsers);
    },

    deleteUser: async (req, res, id) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'ID không hợp lệ' }, 400);
        const result = await db.collection('users').deleteOne({ _id });
        if (result.deletedCount === 0) return res.sendJSON({ error: 'Người dùng không tồn tại' }, 404);
        res.sendJSON({ message: 'User deleted' });
    },

    changePassword: async (req, res, data) => {
        const db = getDB();
        const email = (data.email || '').trim().toLowerCase();
        const { oldPassword, newPassword } = data;

        if (!email || !oldPassword || !newPassword) {
            return res.sendJSON({ error: 'Vui lòng điền đầy đủ thông tin' }, 400);
        }
        if (newPassword.length < 6) {
            return res.sendJSON({ error: 'Mật khẩu mới phải có ít nhất 6 ký tự' }, 400);
        }

        const user = await db.collection('users').findOne({ email });
        if (!user) return res.sendJSON({ error: 'Mật khẩu cũ không chính xác' }, 400);

        const ok = await verifyPassword(oldPassword, user.password, db, user);
        if (!ok) return res.sendJSON({ error: 'Mật khẩu cũ không chính xác' }, 400);

        const hashed = await bcrypt.hash(newPassword, SALT_ROUNDS);
        await db.collection('users').updateOne({ email }, { $set: { password: hashed } });

        res.sendJSON({ message: 'Đổi mật khẩu thành công' }, 200);
    },

    forgotPassword: async (req, res, data) => {
        const db = getDB();
        const email = (data.email || '').trim().toLowerCase();

        if (!email) return res.sendJSON({ error: 'Vui lòng nhập email' }, 400);

        const user = await db.collection('users').findOne({ email });
        if (!user) {
            return res.sendJSON({ message: 'Nếu email tồn tại, chúng tôi đã gửi hướng dẫn đặt lại mật khẩu.' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpiry = new Date(Date.now() + 30 * 60 * 1000);

        await db.collection('users').updateOne(
            { email },
            { $set: { resetToken, resetTokenExpiry } }
        );

        const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
        const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;

        try {
            await sendPasswordResetEmail(email, resetLink);
            console.log(`[RESET] Email sent to ${email}`);
        } catch (err) {
            console.error('[RESET] Failed to send email:', err.message);
            await db.collection('users').updateOne(
                { email },
                { $unset: { resetToken: '', resetTokenExpiry: '' } }
            );
            return res.sendJSON({ error: 'Không thể gửi email. Vui lòng kiểm tra cấu hình email trong .env và thử lại.' }, 500);
        }

        res.sendJSON({ message: 'Nếu email tồn tại, chúng tôi đã gửi hướng dẫn đặt lại mật khẩu.' });
    },

    resetPassword: async (req, res, data) => {
        const db = getDB();
        const { token, newPassword } = data;

        if (!token || !newPassword) {
            return res.sendJSON({ error: 'Token và mật khẩu mới là bắt buộc' }, 400);
        }
        if (newPassword.length < 6) {
            return res.sendJSON({ error: 'Mật khẩu phải có ít nhất 6 ký tự' }, 400);
        }

        const user = await db.collection('users').findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: new Date() }
        });

        if (!user) {
            return res.sendJSON({ error: 'Link đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.' }, 400);
        }

        const hashed = await bcrypt.hash(newPassword, SALT_ROUNDS);
        await db.collection('users').updateOne(
            { _id: user._id },
            {
                $set: { password: hashed },
                $unset: { resetToken: '', resetTokenExpiry: '' }
            }
        );

        res.sendJSON({ message: 'Mật khẩu đã được đặt lại thành công. Vui lòng đăng nhập lại.' });
    }
};

module.exports = userController;
