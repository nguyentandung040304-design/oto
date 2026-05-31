const { getDB } = require('../db');
const { ObjectId } = require('mongodb');
const { sendContactEmail, sendReplyEmail } = require('../utils/mailer');

function toObjectId(id) {
    try { return new ObjectId(id); } catch { return null; }
}

const contactController = {
    createContact: async (req, res, data) => {
        const db = getDB();
        const newContact = {
            name: data.name,
            email: data.email,
            message: data.message,
            status: 'new',
            createdAt: new Date()
        };
        const result = await db.collection('contacts').insertOne(newContact);

        sendContactEmail(newContact).catch(err => console.error('[CONTACT] mail error:', err.message));

        res.sendJSON({ message: 'Contact saved', id: result.insertedId }, 201);
    },

    getAllContacts: async (req, res, query = {}) => {
        const db = getDB();
        const filter = {};
        if (typeof query.email === 'string' && query.email) filter.email = query.email;

        const contacts = await db.collection('contacts').find(filter).sort({ createdAt: -1 }).toArray();
        res.sendJSON(contacts);
    },

    replyToContact: async (req, res, id, data) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'ID không hợp lệ' }, 400);

        const contact = await db.collection('contacts').findOne({ _id });
        if (!contact) return res.sendJSON({ error: 'Contact not found' }, 404);

        const reply = data.reply;
        await db.collection('contacts').updateOne(
            { _id },
            { $set: { reply, status: 'replied', repliedAt: new Date() } }
        );

        sendReplyEmail(contact, reply).catch(err => console.error('[REPLY] mail error:', err.message));

        res.sendJSON({ message: 'Reply sent successfully' });
    },

    deleteContact: async (req, res, id) => {
        const db = getDB();
        const _id = toObjectId(id);
        if (!_id) return res.sendJSON({ error: 'ID không hợp lệ' }, 400);
        const result = await db.collection('contacts').deleteOne({ _id });
        if (result.deletedCount === 0) return res.sendJSON({ error: 'Contact không tồn tại' }, 404);
        res.sendJSON({ message: 'Contact deleted' });
    }
};

module.exports = contactController;
