const http = require('http');
const { handleRequest } = require('./router');
const { connectDB } = require('./db');

async function test() {
    await connectDB();
    const server = http.createServer((req, res) => {
        console.log("INCOMING REQUEST:", req.url);
        handleRequest(req, res);
    });
    server.listen(3002, () => {
        console.log("Test server running on 3002");
    });
}
test();
