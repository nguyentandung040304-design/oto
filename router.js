const url = require('url');
const fs = require('fs');
const path = require('path');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');
const bookingController = require('./controllers/bookingController');
const contactController = require('./controllers/contactController');

async function handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    // Helper to send JSON responses
    res.sendJSON = (data, status = 200) => {
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    };

    // Parse Body Helper
    async function getBody() {
        return new Promise((resolve, reject) => {
            let body = '';
            req.on('data', chunk => body += chunk.toString());
            req.on('end', () => {
                try {
                    resolve(body ? JSON.parse(body) : {});
                } catch (e) {
                    reject(e);
                }
            });
        });
    }

    // Static File Serving
    if (!pathname.startsWith('/api')) {
        let filePath = path.join(__dirname, 'public', pathname === '/' ? 'pages/index.html' : pathname);
        
        // Handle pages shortcut (e.g. /collection -> /pages/collection.html)
        if (!fs.existsSync(filePath) && !path.extname(filePath)) {
            const possibleHtml = path.join(__dirname, 'public', 'pages', pathname + '.html');
            if (fs.existsSync(possibleHtml)) filePath = possibleHtml;
        }

        const ext = path.extname(filePath);
        const contentTypes = {
            '.html': 'text/html; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.js': 'text/javascript; charset=utf-8',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml',
            '.mp4': 'video/mp4'
        };

        if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
            res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
            fs.createReadStream(filePath).pipe(res);
            return;
        } else {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }
    }

    // API Routes
    try {
        // --- Vehicles ---
        if (pathname === '/api/vehicles' && method === 'GET') {
            return await productController.getAllVehicles(req, res, parsedUrl.query);
        }
        if (pathname === '/api/vehicles' && method === 'POST') {
            const body = await getBody();
            return await productController.createVehicle(req, res, body);
        }
        if (pathname.startsWith('/api/vehicles/') && pathname.split('/').length === 4) {
            const id = pathname.split('/')[3];
            if (method === 'GET') return await productController.getVehicleById(req, res, id);
            if (method === 'PUT') return await productController.updateVehicle(req, res, id, await getBody());
            if (method === 'DELETE') return await productController.deleteVehicle(req, res, id);
        }

        // --- Auth ---
        if (pathname === '/api/auth/register' && method === 'POST') {
            return await userController.register(req, res, await getBody());
        }
        if (pathname === '/api/auth/login' && method === 'POST') {
            return await userController.login(req, res, await getBody());
        }
        if (pathname === '/api/users' && method === 'GET') {
            return await userController.getAllUsers(req, res);
        }
        if (pathname === '/api/users' && method === 'POST') {
            const body = await getBody();
            return await userController.createUser(req, res, body);
        }
        if (pathname === '/api/users/change-password' && method === 'PUT') {
            const body = await getBody();
            return await userController.changePassword(req, res, body);
        }
        if (pathname === '/api/auth/forgot-password' && method === 'POST') {
            const body = await getBody();
            return await userController.forgotPassword(req, res, body);
        }
        if (pathname === '/api/auth/reset-password' && method === 'POST') {
            const body = await getBody();
            return await userController.resetPassword(req, res, body);
        }
        if (pathname.startsWith('/api/users/') && method === 'DELETE') {
            const id = pathname.split('/')[3];
            return await userController.deleteUser(req, res, id);
        }
        if (pathname.startsWith('/api/users/') && method === 'PUT' && pathname !== '/api/users/change-password') {
            const id = pathname.split('/')[3];
            const body = await getBody();
            return await userController.updateProfile(req, res, id, body);
        }

        // --- Orders ---
        if (pathname === '/api/orders' && method === 'GET') return await orderController.getAllOrders(req, res);
        if (pathname === '/api/orders' && method === 'POST') return await orderController.createOrder(req, res, await getBody());
        if (pathname.startsWith('/api/orders/') && method === 'PUT') {
            const id = pathname.split('/')[3];
            return await orderController.updateOrder(req, res, id, await getBody());
        }
        if (pathname.startsWith('/api/orders/') && method === 'DELETE') {
            const id = pathname.split('/')[3];
            return await orderController.deleteOrder(req, res, id);
        }

        // --- Bookings ---
        if (pathname === '/api/bookings' && method === 'GET') return await bookingController.getAllBookings(req, res);
        if (pathname === '/api/bookings' && method === 'POST') return await bookingController.createBooking(req, res, await getBody());
        if (pathname.startsWith('/api/bookings/') && method === 'PUT') {
            const id = pathname.split('/')[3];
            return await bookingController.updateBooking(req, res, id, await getBody());
        }
        if (pathname.startsWith('/api/bookings/') && method === 'DELETE') {
            const id = pathname.split('/')[3];
            return await bookingController.deleteBooking(req, res, id);
        }

        // --- Contacts ---
        if (pathname === '/api/contacts' && method === 'GET') {
            return await contactController.getAllContacts(req, res, parsedUrl.query);
        }
        if (pathname === '/api/contacts' && method === 'POST') {
            return await contactController.createContact(req, res, await getBody());
        }
        if (pathname.startsWith('/api/contacts/') && method === 'PUT') {
            const id = pathname.split('/')[3];
            return await contactController.replyToContact(req, res, id, await getBody());
        }
        if (pathname.startsWith('/api/contacts/') && method === 'DELETE') {
            const id = pathname.split('/')[3];
            return await contactController.deleteContact(req, res, id);
        }

        // Default 404 for API
        res.sendJSON({ error: 'Route not found' }, 404);

    } catch (error) {
        console.error(error);
        res.sendJSON({ error: 'Internal Server Error', message: error.message }, 500);
    }
}

module.exports = { handleRequest };
