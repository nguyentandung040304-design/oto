const fs = require('fs');
const path = require('path');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');
const bookingController = require('./controllers/bookingController');
const contactController = require('./controllers/contactController');
const { requireAuth, requireAdmin, requireStrictAdmin } = require('./middleware/auth');

const CONTENT_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.ico': 'image/x-icon',
    '.json': 'application/json; charset=utf-8'
};

async function handleRequest(req, res) {
    const parsedUrl = new URL(req.url, 'http://localhost');
    const pathname = parsedUrl.pathname;
    const method = req.method;
    const query = Object.fromEntries(parsedUrl.searchParams);

    res.sendJSON = (data, status = 200) => {
        res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(data));
    };

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
        const publicDir = path.join(__dirname, 'public');
        let filePath = path.join(publicDir, pathname === '/' ? 'pages/index.html' : pathname);

        if (!fs.existsSync(filePath) && !path.extname(filePath)) {
            const possibleHtml = path.join(publicDir, 'pages', pathname + '.html');
            if (fs.existsSync(possibleHtml)) filePath = possibleHtml;
        }

        // Prevent directory traversal
        if (!filePath.startsWith(publicDir)) {
            res.writeHead(403);
            res.end('Forbidden');
            return;
        }

        const ext = path.extname(filePath);

        if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
            res.writeHead(200, { 'Content-Type': CONTENT_TYPES[ext] || 'text/plain' });
            fs.createReadStream(filePath).pipe(res);
            return;
        } else {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }
    }

    try {
        // --- Vehicles ---
        if (pathname === '/api/vehicles' && method === 'GET') {
            return await productController.getAllVehicles(req, res, query);
        }
        if (pathname === '/api/vehicles' && method === 'POST') {
            if (!requireAdmin(req, res)) return;
            return await productController.createVehicle(req, res, await getBody());
        }
        if (pathname === '/api/vehicles/logs' && method === 'GET') {
            if (!requireStrictAdmin(req, res)) return;
            return await productController.getVehicleLogs(req, res, query);
        }
        if (pathname.startsWith('/api/vehicles/') && pathname.split('/').length === 4) {
            const id = pathname.split('/')[3];
            if (method === 'GET') return await productController.getVehicleById(req, res, id);
            if (method === 'PUT') {
                if (!requireAdmin(req, res)) return;
                return await productController.updateVehicle(req, res, id, await getBody());
            }
            if (method === 'DELETE') {
                if (!requireAdmin(req, res)) return;
                return await productController.deleteVehicle(req, res, id);
            }
        }

        // --- Auth (public) ---
        if (pathname === '/api/auth/register' && method === 'POST') {
            return await userController.register(req, res, await getBody());
        }
        if (pathname === '/api/auth/login' && method === 'POST') {
            return await userController.login(req, res, await getBody());
        }
        if (pathname === '/api/auth/logout' && method === 'POST') {
            return await userController.logout(req, res);
        }
        if (pathname === '/api/auth/forgot-password' && method === 'POST') {
            return await userController.forgotPassword(req, res, await getBody());
        }
        if (pathname === '/api/auth/reset-password' && method === 'POST') {
            return await userController.resetPassword(req, res, await getBody());
        }

        // --- Users ---
        if (pathname === '/api/users' && method === 'GET') {
            if (!requireAdmin(req, res)) return;
            return await userController.getAllUsers(req, res);
        }
        if (pathname === '/api/users' && method === 'POST') {
            if (!requireAdmin(req, res)) return;
            return await userController.createUser(req, res, await getBody());
        }
        if (pathname === '/api/users/change-password' && method === 'PUT') {
            if (!requireAuth(req, res)) return;
            return await userController.changePassword(req, res, await getBody());
        }
        if (pathname.startsWith('/api/users/') && method === 'DELETE') {
            if (!requireAdmin(req, res)) return;
            const id = pathname.split('/')[3];
            return await userController.deleteUser(req, res, id);
        }
        if (pathname.startsWith('/api/users/') && method === 'PUT' && pathname !== '/api/users/change-password') {
            if (!requireAuth(req, res)) return;
            const id = pathname.split('/')[3];
            const isAdmin = req.user.role === 'admin' || req.user.role === 'employee';
            if (!isAdmin && req.user._id !== id) {
                return res.sendJSON({ error: 'Forbidden' }, 403);
            }
            return await userController.updateProfile(req, res, id, await getBody());
        }

        // --- Orders ---
        if (pathname === '/api/orders' && method === 'GET') {
            if (!requireAdmin(req, res)) return;
            return await orderController.getAllOrders(req, res);
        }
        if (pathname === '/api/orders' && method === 'POST') {
            if (!requireAuth(req, res)) return;
            return await orderController.createOrder(req, res, await getBody());
        }
        if (pathname.startsWith('/api/orders/') && method === 'PUT') {
            if (!requireAdmin(req, res)) return;
            const id = pathname.split('/')[3];
            return await orderController.updateOrder(req, res, id, await getBody());
        }
        if (pathname.startsWith('/api/orders/') && method === 'DELETE') {
            if (!requireAdmin(req, res)) return;
            const id = pathname.split('/')[3];
            return await orderController.deleteOrder(req, res, id);
        }

        // --- Bookings ---
        if (pathname === '/api/bookings' && method === 'GET') {
            if (!requireAdmin(req, res)) return;
            return await bookingController.getAllBookings(req, res);
        }
        if (pathname === '/api/bookings' && method === 'POST') {
            return await bookingController.createBooking(req, res, await getBody());
        }
        if (pathname.startsWith('/api/bookings/') && method === 'PUT') {
            if (!requireAdmin(req, res)) return;
            const id = pathname.split('/')[3];
            return await bookingController.updateBooking(req, res, id, await getBody());
        }
        if (pathname.startsWith('/api/bookings/') && method === 'DELETE') {
            if (!requireAdmin(req, res)) return;
            const id = pathname.split('/')[3];
            return await bookingController.deleteBooking(req, res, id);
        }

        // --- Contacts ---
        if (pathname === '/api/contacts' && method === 'GET') {
            if (!requireAdmin(req, res)) return;
            return await contactController.getAllContacts(req, res, query);
        }
        if (pathname === '/api/contacts' && method === 'POST') {
            return await contactController.createContact(req, res, await getBody());
        }
        if (pathname.startsWith('/api/contacts/') && method === 'PUT') {
            if (!requireAdmin(req, res)) return;
            const id = pathname.split('/')[3];
            return await contactController.replyToContact(req, res, id, await getBody());
        }
        if (pathname.startsWith('/api/contacts/') && method === 'DELETE') {
            if (!requireAdmin(req, res)) return;
            const id = pathname.split('/')[3];
            return await contactController.deleteContact(req, res, id);
        }

        res.sendJSON({ error: 'Route not found' }, 404);

    } catch (error) {
        console.error(error);
        res.sendJSON({ error: 'Internal Server Error' }, 500);
    }
}

module.exports = { handleRequest };
