const { getDB } = require('../db');
const { ObjectId } = require('mongodb');
const { sendContactEmail, sendReplyEmail } = require('../utils/mailer');

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
        
        // Gửi email thông báo cho Admin (không đợi để tránh làm chậm response)
        sendContactEmail(newContact);

        res.sendJSON({ message: 'Contact saved', id: result.insertedId }, 201);
    },

    getAllContacts: async (req, res, query = {}) => {
        const db = getDB();
        const filter = {};
        if (query.email) filter.email = query.email;
        
        const contacts = await db.collection('contacts').find(filter).sort({ createdAt: -1 }).toArray();
        res.sendJSON(contacts);
    },

    replyToContact: async (req, res, id, data) => {
        const db = getDB();
        const contact = await db.collection('contacts').findOne({ _id: new ObjectId(id) });
        
        if (!contact) {
            return res.sendJSON({ error: 'Contact not found' }, 404);
        }

        const reply = data.reply;
        await db.collection('contacts').updateOne(
            { _id: new ObjectId(id) },
            { $set: { reply, status: 'replied', repliedAt: new Date() } }
        );

        // Gửi email phản hồi cho khách hàng
        sendReplyEmail(contact, reply);

        res.sendJSON({ message: 'Reply sent successfully' });
    },

    deleteContact: async (req, res, id) => {
        const db = getDB();
        await db.collection('contacts').deleteOne({ _id: new ObjectId(id) });
        res.sendJSON({ message: 'Contact deleted' });
    }
};

module.exports = contactController;
