const { getDB } = require('../db');
const { ObjectId } = require('mongodb');

const productController = {
    getAllVehicles: async (req, res, query) => {
        const db = getDB();
        const filter = { isActive: { $ne: false } };

        if (query.brand) filter.brand = query.brand;
        if (query.type) filter.type = query.type;
        if (query.fuel) filter.fuel = query.fuel;
        if (query.minPrice) filter.price = { ...filter.price, $gte: parseFloat(query.minPrice) };
        if (query.maxPrice) filter.price = { ...filter.price, $lte: parseFloat(query.maxPrice) };
        if (query.name) filter.name = { $regex: query.name, $options: 'i' };

        const vehicles = await db.collection('vehicles').find(filter).toArray();
        res.sendJSON(vehicles);
    },

    getVehicleById: async (req, res, id) => {
        try {
            const db = getDB();
            const vehicle = await db.collection('vehicles').findOne({ _id: new ObjectId(id) });
            if (!vehicle) return res.sendJSON({ error: 'Vehicle not found' }, 404);
            res.sendJSON(vehicle);
        } catch (e) {
            res.sendJSON({ error: 'Invalid ID format' }, 400);
        }
    },

    createVehicle: async (req, res, data) => {
        const db = getDB();
        const newVehicle = {
            ...data,
            isActive: true,
            createdAt: new Date()
        };
        const result = await db.collection('vehicles').insertOne(newVehicle);
        res.sendJSON({ message: 'Vehicle created', id: result.insertedId }, 201);
    },

    updateVehicle: async (req, res, id, data) => {
        try {
            const db = getDB();
            const result = await db.collection('vehicles').updateOne(
                { _id: new ObjectId(id) },
                { $set: data }
            );
            if (result.matchedCount === 0) return res.sendJSON({ error: 'Vehicle not found' }, 404);
            res.sendJSON({ message: 'Vehicle updated' });
        } catch (e) {
            res.sendJSON({ error: 'Invalid ID format' }, 400);
        }
    },

    deleteVehicle: async (req, res, id) => {
        try {
            const db = getDB();
            // Soft delete
            const result = await db.collection('vehicles').updateOne(
                { _id: new ObjectId(id) },
                { $set: { isActive: false } }
            );
            if (result.matchedCount === 0) return res.sendJSON({ error: 'Vehicle not found' }, 404);
            res.sendJSON({ message: 'Vehicle deleted' });
        } catch (e) {
            res.sendJSON({ error: 'Invalid ID format' }, 400);
        }
    }
};

module.exports = productController;
