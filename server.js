const http = require('http');
const { connectDB } = require('./db');
const { handleRequest } = require('./router');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

async function ensureDefaultEmployee() {
    const { getDB } = require('./db');
    const db = getDB();
    const email = 'nv.a@example.com';
    const existing = await db.collection('users').findOne({ email });
    if (!existing) {
        await db.collection('users').insertOne({
            name: 'Nguyễn Văn A',
            email,
            password: 'Pass@1234',
            phone: '0901234567',
            address: '',
            role: 'employee',
            createdAt: new Date()
        });
        console.log('Default employee account created: nv.a@example.com / Pass@1234');
    }
}

async function startServer() {
    // Ensure DB is connected before starting the server
    await connectDB();
    await ensureDefaultEmployee();

    const server = http.createServer((req, res) => {
        handleRequest(req, res);
    });

    server.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
        console.log('Press Ctrl+C to stop');
    });
}

startServer().catch(err => {
    console.error('Failed to start server:', err);
});
