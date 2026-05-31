const http = require('http');
const { connectDB } = require('./db');
const { handleRequest } = require('./router');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

async function ensureDefaultEmployee() {
    const bcrypt = require('bcryptjs');
    const { getDB } = require('./db');
    const db = getDB();
    const email = 'nv.a@example.com';
    const existing = await db.collection('users').findOne({ email });
    if (!existing) {
        const hashedPassword = await bcrypt.hash('Pass@1234', 10);
        await db.collection('users').insertOne({
            name: 'Nguyễn Văn A',
            email,
            password: hashedPassword,
            phone: '0901234567',
            address: '',
            role: 'employee',
            createdAt: new Date()
        });
        console.log('Default employee account created: nv.a@example.com / Pass@1234');
    }
}

async function ensureDefaultAdmin() {
    const bcrypt = require('bcryptjs');
    const { getDB } = require('./db');
    const db = getDB();
    const email = 'admin@example.com';
    const existing = await db.collection('users').findOne({ email });
    if (!existing) {
        const hashedPassword = await bcrypt.hash('Admin@1234', 10);
        await db.collection('users').insertOne({
            name: 'Quản Trị Viên',
            email,
            password: hashedPassword,
            phone: '0900000000',
            address: '',
            role: 'admin',
            createdAt: new Date()
        });
        console.log('Default admin account created: admin@example.com / Admin@1234');
    }
}

async function startServer() {
    // Ensure DB is connected before starting the server
    await connectDB();
    await ensureDefaultEmployee();
    await ensureDefaultAdmin();

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
