const { getDB } = require('../db');
const { ObjectId } = require('mongodb');

const bookingController = {
    getAllBookings: async (req, res) => {
        const db = getDB();
        const bookings = await db.collection('bookings').find().sort({ createdAt: -1 }).toArray();
        const users = await db.collection('users').find().toArray();
        const vehicles = await db.collection('vehicles').find().toArray();

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
        const newBooking = {
            ...data,
            createdAt: new Date()
        };
        const result = await db.collection('bookings').insertOne(newBooking);
        res.sendJSON({ message: 'Booking created', id: result.insertedId }, 201);
    },

    updateBooking: async (req, res, id, data) => {
        const db = getDB();
        await db.collection('bookings').updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );
        res.sendJSON({ message: 'Booking updated' });
    },

    deleteBooking: async (req, res, id) => {
        const db = getDB();
        await db.collection('bookings').deleteOne({ _id: new ObjectId(id) });
        res.sendJSON({ message: 'Booking deleted' });
    }
};

module.exports = bookingController;
