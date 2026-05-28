const { getDB } = require('../db');
const { ObjectId } = require('mongodb');
const crypto = require('crypto');
const { sendPasswordResetEmail } = require('../utils/mailer');

const userController = {
    register: async (req, res, data) => {
        const db = getDB();
        const email = (data.email || '').trim().toLowerCase();
        const { password, name, phone, address } = data;

        // Check if user exists
        const existing = await db.collection('users').findOne({ email });
        if (existing) return res.sendJSON({ error: 'Email already registered' }, 400);

        const newUser = {
            email,
            password, // In real apps, hash this!
            name,
            phone,
            address,
            role: data.role || 'user',
            createdAt: new Date()
        };

        const result = await db.collection('users').insertOne(newUser);
        res.sendJSON({ message: 'User registered', userId: result.insertedId }, 201);
    },

    login: async (req, res, data) => {
        const db = getDB();
        const email = (data.email || '').trim().toLowerCase();
        const { password } = data;

        let user = await db.collection('users').findOne({ email, password });
        if (!user) {
            // Auto-create default employee if missing
            if (email === 'nv.a@example.com' && password === 'Pass@1234') {
                const existing = await db.collection('users').findOne({ email });
                if (!existing) {
                    const result = await db.collection('users').insertOne({
                        name: 'Nguyễn Văn A',
                        email,
                        password,
                        phone: '0901234567',
                        address: '',
                        role: 'employee',
                        createdAt: new Date()
                    });
                    user = await db.collection('users').findOne({ _id: result.insertedId });
                } else {
                    user = existing;
                }
            }
        }

        if (!user || user.password !== password) {
            return res.sendJSON({ error: 'Invalid email or password' }, 401);
        }

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user;
        res.sendJSON({ message: 'Login successful', user: userWithoutPassword });
    },

    createUser: async (req, res, data) => {
        const db = getDB();
        const email = (data.email || '').trim().toLowerCase();
        const { password, name, phone, address, role } = data;

        if (!email || !password || !name) {
            return res.sendJSON({ error: 'Name, email and password are required' }, 400);
        }

        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return res.sendJSON({ error: 'Email đã được sử dụng' }, 400);
        }

        const newUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role || 'user',
            createdAt: new Date()
        };

        const result = await db.collection('users').insertOne(newUser);
        res.sendJSON({ _id: result.insertedId, ...newUser }, 201);
    },

    updateProfile: async (req, res, id, data) => {
        const db = getDB();
        try {
            const updateFields = {};
            if (data.name !== undefined) updateFields.name = data.name;
            if (data.phone !== undefined) updateFields.phone = data.phone;
            if (data.dob !== undefined) updateFields.dob = data.dob;
            if (data.address !== undefined) updateFields.address = data.address;

            if (Object.keys(updateFields).length === 0) {
                return res.sendJSON({ error: 'Không có thông tin nào để cập nhật' }, 400);
            }

            await db.collection('users').updateOne(
                { _id: new ObjectId(id) },
                { $set: updateFields }
            );
            
            const updatedUser = await db.collection('users').findOne({ _id: new ObjectId(id) });

            if (!updatedUser) {
                return res.sendJSON({ error: 'Người dùng không tồn tại' }, 404);
            }
            // Remove password from response
            delete updatedUser.password;

            res.sendJSON({ message: 'Cập nhật thành công', user: updatedUser });
        } catch (error) {
            console.error(error);
            res.sendJSON({ error: 'Lỗi server' }, 500);
        }
    },

    getAllUsers: async (req, res) => {
        const db = getDB();
        const users = await db.collection('users').find().sort({ createdAt: -1 }).toArray();
        // Remove passwords from list for security
        const sanitizedUsers = users.map(u => {
            const { password, ...rest } = u;
            return rest;
        });
        res.sendJSON(sanitizedUsers);
    },

    deleteUser: async (req, res, id) => {
        const db = getDB();
        await db.collection('users').deleteOne({ _id: new ObjectId(id) });
        res.sendJSON({ message: 'User deleted' });
    },

    changePassword: async (req, res, data) => {
        const db = getDB();
        const { email, oldPassword, newPassword } = data;
        
        if (!email || !oldPassword || !newPassword) {
            return res.sendJSON({ error: 'Vui lòng điền đầy đủ thông tin' }, 400);
        }

        const user = await db.collection('users').findOne({ email });
        if (!user || user.password !== oldPassword) {
            return res.sendJSON({ error: 'Mật khẩu cũ không chính xác' }, 400);
        }

        await db.collection('users').updateOne(
            { email },
            { $set: { password: newPassword } }
        );

        res.sendJSON({ message: 'Đổi mật khẩu thành công' }, 200);
    },

    forgotPassword: async (req, res, data) => {
        const db = getDB();
        const email = (data.email || '').trim().toLowerCase();

        if (!email) {
            return res.sendJSON({ error: 'Vui lòng nhập email' }, 400);
        }

        const user = await db.collection('users').findOne({ email });
        // Always return success to avoid revealing whether email exists
        if (!user) {
            return res.sendJSON({ message: 'Nếu email tồn tại, chúng tôi đã gửi hướng dẫn đặt lại mật khẩu.' });
        }

        // Generate secure token (32 bytes hex = 64 char string)
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpiry = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

        await db.collection('users').updateOne(
            { email },
            { $set: { resetToken, resetTokenExpiry } }
        );

        const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
        const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;

        try {
            await sendPasswordResetEmail(email, resetLink);
            console.log(`[RESET] Email sent to ${email}`);
        } catch (err) {
            console.error('[RESET] Failed to send email:', err.message);
            // Clear token if email failed
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

        await db.collection('users').updateOne(
            { _id: user._id },
            {
                $set: { password: newPassword },
                $unset: { resetToken: '', resetTokenExpiry: '' }
            }
        );

        res.sendJSON({ message: 'Mật khẩu đã được đặt lại thành công. Vui lòng đăng nhập lại.' });
    }
};

module.exports = userController;
