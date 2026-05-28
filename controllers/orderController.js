const { getDB } = require('../db');
const { ObjectId } = require('mongodb');

const orderController = {
    getAllOrders: async (req, res) => {
        const db = getDB();
        const orders = await db.collection('orders').find().sort({ createdAt: -1 }).toArray();
        const users = await db.collection('users').find().toArray();
        
        const result = orders.map(o => {
            const user = users.find(u => u._id.toString() === (o.userId ? o.userId.toString() : ''));
            const matchedUser = user || (o.customerEmail ? users.find(u => u.email === o.customerEmail) : null);
            const vehicleName = o.vehicleName || (o.items && o.items.length > 0 ? o.items[0].name : '');
            return {
                ...o,
                userId: o.userId || (matchedUser ? matchedUser._id.toString() : null),
                customerName: o.customerName || (matchedUser ? matchedUser.name : 'Khách vãng lai'),
                customerEmail: o.customerEmail || (matchedUser ? matchedUser.email : ''),
                vehicleName: vehicleName,
                depositAmount: o.depositAmount || o.deposit || 0,
                status: o.status || 'pending'
            };
        });
        res.sendJSON(result);
    },

    createOrder: async (req, res, data) => {
        const db = getDB();
        const newOrder = {
            ...data,
            createdAt: new Date()
        };
        const result = await db.collection('orders').insertOne(newOrder);
        res.sendJSON({ message: 'Order created', id: result.insertedId }, 201);
    },

    updateOrder: async (req, res, id, data) => {
        const db = getDB();
        await db.collection('orders').updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );
        res.sendJSON({ message: 'Order updated' });
    },

    deleteOrder: async (req, res, id) => {
        const db = getDB();
        await db.collection('orders').deleteOne({ _id: new ObjectId(id) });
        res.sendJSON({ message: 'Order deleted' });
    }
};

module.exports = orderController;
