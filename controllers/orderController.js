const { getDB } = require('../db');
const { ObjectId } = require('mongodb');

function toObjectId(id) {
    try { return new ObjectId(id); } catch { return null; }
}

const orderController = {
    getAllOrders: async (req, res) => {
        const db = getDB();
        const orders = await db.collection('orders').find().sort({ createdAt: -1 }).toArray();

        const userIds = [...new Set(orders.map(o => o.userId).filter(Boolean).map(String))];
        const emails = [...new Set(orders.map(o => o.customerEmail).filter(Boolean))];

        const userObjectIds = userIds.map(toObjectId).filter(Boolean);

        const orConditions = [];
        if (userObjectIds.length) orConditions.push({ _id: { $in: userObjectIds } });
        if (emails.length) orConditions.push({ email: { $in: emails } });

        const users = orConditions.length
            ? await db.collection('users').find({ $or: orConditions })
                .project({ password: 0, resetToken: 0, resetTokenExpiry: 0 }).toArray()
            : [];

        const result = orders.map(o => {
            const user = users.find(u => u._id.toString() === (o.userId ? o.userId.toString() : ''));
            const matchedUser = user || (o.customerEmail ? users.find(u => u.email === o.customerEmail) : null);
            const vehicleName = o.vehicleName || (o.items && o.items.length > 0 ? o.items[0].name : '');
            return {
                ...o,
                userId: o.userId || (matchedUser ? matchedUser._id.toString() : null),
                customerName: o.customerName || (matchedUser ? matchedUser.name : 'Khách vãng lai'),
                customerEmail: o.customerEmail || (matchedUser ? matchedUser.email : ''),
                vehicleName,
                depositAmount: o.depositAmount || o.deposit || 0,
                status: o.status || 'pending'
            };
        });
        res.sendJSON(result);
    },

    createOrder: async (req, res, data) => {
        const db = getDB();
        const { status, ...rest } = data;
        const newOrder = {
            ...rest,
            status: 'pending',
            createdAt: new Date()
        };
        const result = await db.collection('orders').insertOne(newOrder);
        res.sendJSON({ message: 'Order created', id: result.insertedId }, 201);
    },

    updateOrder: async (req, res, id, data) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'ID không hợp lệ' }, 400);
        const result = await db.collection('orders').updateOne({ _id }, { $set: data });
        if (result.matchedCount === 0) return res.sendJSON({ error: 'Đơn hàng không tồn tại' }, 404);
        res.sendJSON({ message: 'Order updated' });
    },

    deleteOrder: async (req, res, id) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'ID không hợp lệ' }, 400);
        const result = await db.collection('orders').deleteOne({ _id });
        if (result.deletedCount === 0) return res.sendJSON({ error: 'Đơn hàng không tồn tại' }, 404);
        res.sendJSON({ message: 'Order deleted' });
    }
};

module.exports = orderController;
