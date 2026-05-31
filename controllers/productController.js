const { getDB } = require('../db');
const { ObjectId } = require('mongodb');

function toObjectId(id) {
    try { return new ObjectId(id); } catch { return null; }
}

function asString(v) {
    return typeof v === 'string' && v.length > 0 ? v : null;
}

function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function logActivity(action, vehicle, user, extra = {}) {
    try {
        const db = getDB();
        await db.collection('vehicle_logs').insertOne({
            action,
            vehicleId: vehicle?._id ? vehicle._id.toString() : null,
            vehicleName: vehicle?.name || '',
            vehicleBrand: vehicle?.brand || '',
            userId: user?._id || null,
            userEmail: user?.email || '',
            userRole: user?.role || '',
            timestamp: new Date(),
            ...extra
        });
    } catch (e) {
        console.error('[VEHICLE_LOG] failed:', e.message);
    }
}

const productController = {
    getAllVehicles: async (req, res, query) => {
        const db = getDB();
        const filter = { isActive: { $ne: false } };

        const brand = asString(query.brand);
        const type = asString(query.type);
        const fuel = asString(query.fuel);
        const name = asString(query.name);
        const minP = parseFloat(query.minPrice);
        const maxP = parseFloat(query.maxPrice);

        if (brand) filter.brand = brand;
        if (type) filter.type = type;
        if (fuel) filter.fuel = fuel;
        if (Number.isFinite(minP)) filter.price = { ...filter.price, $gte: minP };
        if (Number.isFinite(maxP)) filter.price = { ...filter.price, $lte: maxP };
        if (name) filter.name = { $regex: escapeRegex(name), $options: 'i' };

        const vehicles = await db.collection('vehicles').find(filter).toArray();
        res.sendJSON(vehicles);
    },

    getVehicleById: async (req, res, id) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'Invalid ID format' }, 400);
        const vehicle = await db.collection('vehicles').findOne({ _id });
        if (!vehicle) return res.sendJSON({ error: 'Vehicle not found' }, 404);
        
        await logActivity('view', vehicle, req.user);
        
        res.sendJSON(vehicle);
    },

    createVehicle: async (req, res, data) => {
        const db = getDB();
        const newVehicle = {
            ...data,
            isActive: true,
            createdAt: new Date()
        };
        const result = await db.collection('vehicles').insertOne(newVehicle);
        await logActivity('create', { _id: result.insertedId, name: newVehicle.name, brand: newVehicle.brand }, req.user);
        res.sendJSON({ message: 'Vehicle created', id: result.insertedId }, 201);
    },

    updateVehicle: async (req, res, id, data) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'Invalid ID format' }, 400);
        const before = await db.collection('vehicles').findOne({ _id });
        if (!before) return res.sendJSON({ error: 'Vehicle not found' }, 404);

        await db.collection('vehicles').updateOne({ _id }, { $set: data });

        const changedFields = Object.keys(data).filter(k => k !== 'images');
        await logActivity('update', { _id, name: data.name || before.name, brand: data.brand || before.brand }, req.user, {
            changedFields
        });
        res.sendJSON({ message: 'Vehicle updated' });
    },

    deleteVehicle: async (req, res, id) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'Invalid ID format' }, 400);
        const before = await db.collection('vehicles').findOne({ _id });
        if (!before) return res.sendJSON({ error: 'Vehicle not found' }, 404);
        await db.collection('vehicles').updateOne({ _id }, { $set: { isActive: false } });
        await logActivity('delete', before, req.user);
        res.sendJSON({ message: 'Vehicle deleted' });
    },

    getVehicleLogs: async (req, res, query) => {
        const db = getDB();
        const filter = {};
        
        if (query && query.action) filter.action = query.action;
        if (query && query.vehicleId) filter.vehicleId = query.vehicleId;
        if (query && query.userId) filter.userId = toObjectId(query.userId) || query.userId;
        
        const page = parseInt(query?.page) || 1;
        const limit = parseInt(query?.limit) || 50;
        const skip = (page - 1) * limit;

        const logs = await db.collection('vehicle_logs')
            .find(filter)
            .sort({ timestamp: -1 })
            .skip(skip)
            .limit(limit)
            .toArray();
            
        const total = await db.collection('vehicle_logs').countDocuments(filter);
        
        res.sendJSON({
            data: logs,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    }
};

module.exports = productController;
