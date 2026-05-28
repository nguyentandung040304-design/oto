const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/vehicle_store';
const client = new MongoClient(uri);

async function run() {
    await client.connect();
    const db = client.db();
    await db.collection('users').updateOne(
        { email: 'nhanvien@luxury.com' },
        { $set: { name: 'Nhân Viên Mẫu' } }
    );
    console.log("Updated");
    process.exit(0);
}
run();
