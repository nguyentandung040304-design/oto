const { getDB } = require('../db');
const { ObjectId } = require('mongodb');

function toObjectId(id) {
    try { return new ObjectId(id); } catch { return null; }
}

const bookingController = {
    getAllBookings: async (req, res) => {
        const db = getDB();
        const bookings = await db.collection('bookings').find().sort({ createdAt: -1 }).toArray();

        const userIds = [...new Set(bookings.map(b => b.userId).filter(Boolean).map(String))];
        const emails = [...new Set(bookings.map(b => b.email).filter(Boolean))];
        const vehicleIds = [...new Set(
            bookings.flatMap(b => (Array.isArray(b.vehicleIds) ? b.vehicleIds : [])).filter(Boolean).map(String)
        )];

        const userObjectIds = userIds.map(toObjectId).filter(Boolean);
        const vehicleObjectIds = vehicleIds.map(toObjectId).filter(Boolean);

        const orConditions = [];
        if (userObjectIds.length) orConditions.push({ _id: { $in: userObjectIds } });
        if (emails.length) orConditions.push({ email: { $in: emails } });

        const users = orConditions.length
            ? await db.collection('users').find({ $or: orConditions })
                .project({ password: 0, resetToken: 0, resetTokenExpiry: 0 }).toArray()
            : [];

        const vehicles = vehicleObjectIds.length
            ? await db.collection('vehicles').find({ _id: { $in: vehicleObjectIds } }).project({ name: 1 }).toArray()
            : [];

        const result = bookings.map(b => {
            const user = users.find(u => u._id.toString() === (b.userId ? b.userId.toString() : ''));
            const matchedUser = user || (b.email ? users.find(u => u.email === b.email) : null);
            const vehicleId = b.vehicleIds && b.vehicleIds.length > 0 ? b.vehicleIds[0] : null;
            const vehicle = vehicles.find(v => v._id.toString() === (vehicleId ? vehicleId.toString() : ''));

            return {
                ...b,
                userId: b.userId || (matchedUser ? matchedUser._id.toString() : null),
                name: b.name || (matchedUser ? matchedUser.name : 'Khách vãng lai'),
                phone: b.phone || (matchedUser ? matchedUser.phone : ''),
                email: b.email || (matchedUser ? matchedUser.email : ''),
                vehicleName: b.vehicleName || (vehicle ? vehicle.name : 'Đang chọn...'),
                time: b.time || b.timeSlot,
                status: b.status || 'pending'
            };
        });
        res.sendJSON(result);
    },

    createBooking: async (req, res, data) => {
        const db = getDB();
        const { status, ...rest } = data;
        const newBooking = {
            ...rest,
            status: 'pending',
            createdAt: new Date()
        };
        const result = await db.collection('bookings').insertOne(newBooking);
        res.sendJSON({ message: 'Booking created', id: result.insertedId }, 201);
    },

    updateBooking: async (req, res, id, data) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'ID không hợp lệ' }, 400);
        const result = await db.collection('bookings').updateOne({ _id }, { $set: data });
        if (result.matchedCount === 0) return res.sendJSON({ error: 'Booking không tồn tại' }, 404);
        res.sendJSON({ message: 'Booking updated' });
    },

    deleteBooking: async (req, res, id) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'ID không hợp lệ' }, 400);
        const result = await db.collection('bookings').deleteOne({ _id });
        if (result.deletedCount === 0) return res.sendJSON({ error: 'Booking không tồn tại' }, 404);
        res.sendJSON({ message: 'Booking deleted' });
    }
};

module.exports = bookingController;
