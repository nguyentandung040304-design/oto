const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-change-me-in-prod';
const COOKIE_NAME = 'session';
const ONE_DAY = 60 * 60 * 24;

function parseCookies(req) {
    const header = req.headers.cookie || '';
    const out = {};
    header.split(';').forEach(part => {
        const [k, ...rest] = part.trim().split('=');
        if (!k) return;
        out[k] = decodeURIComponent(rest.join('='));
    });
    return out;
}

function signSession(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

function buildCookie(token) {
    return `${COOKIE_NAME}=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${ONE_DAY}`;
}

function clearCookie() {
    return `${COOKIE_NAME}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0`;
}

function getUserFromRequest(req) {
    try {
        const cookies = parseCookies(req);
        let token = cookies[COOKIE_NAME];
        if (!token) {
            const authHeader = req.headers.authorization || '';
            if (authHeader.startsWith('Bearer ')) token = authHeader.slice(7);
        }
        if (!token) return null;
        return jwt.verify(token, JWT_SECRET);
    } catch (e) {
        return null;
    }
}

function requireAuth(req, res) {
    const user = getUserFromRequest(req);
    if (!user) {
        res.sendJSON({ error: 'Unauthorized' }, 401);
        return null;
    }
    req.user = user;
    return user;
}

function requireAdmin(req, res) {
    const user = requireAuth(req, res);
    if (!user) return null;
    if (user.role !== 'admin' && user.role !== 'employee') {
        res.sendJSON({ error: 'Forbidden' }, 403);
        return null;
    }
    return user;
}

function requireStrictAdmin(req, res) {
    const user = requireAuth(req, res);
    if (!user) return null;
    if (user.role !== 'admin') {
        res.sendJSON({ error: 'Chỉ admin được phép truy cập' }, 403);
        return null;
    }
    return user;
}

module.exports = {
    JWT_SECRET,
    COOKIE_NAME,
    signSession,
    buildCookie,
    clearCookie,
    getUserFromRequest,
    requireAuth,
    requireAdmin,
    requireStrictAdmin
};
