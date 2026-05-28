const API = {
    async getVehicles(filters = {}) {
        const query = new URLSearchParams(filters).toString();
        const res = await fetch(`/api/vehicles?${query}`);
        return await res.json();
    },

    async getVehicle(id) {
        const res = await fetch(`/api/vehicles/${id}`);
        return await res.json();
    },

    async register(userData) {
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        return await res.json();
    },

    async login(credentials) {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        const data = await res.json();
        if (data.user) {
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        return data;
    },

    async createBooking(bookingData) {
        const res = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        });
        return await res.json();
    },

    async createOrder(orderData) {
        const res = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });
        return await res.json();
    },

    getCurrentUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    logout() {
        localStorage.removeItem('user');
        window.location.href = '/index';
    },

    async forgotPassword(email) {
        const res = await fetch('/api/auth/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        return await res.json();
    },

    async resetPassword(token, newPassword) {
        const res = await fetch('/api/auth/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, newPassword })
        });
        return await res.json();
    },

    async updateProfile(userId, profileData) {
        const res = await fetch(`/api/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profileData)
        });
        const data = await res.json();
        if (data.user) {
            const currentUser = this.getCurrentUser();
            const updatedUser = { ...currentUser, ...data.user };
            localStorage.setItem('user', JSON.stringify(updatedUser));
        }
        return data;
    },

    async changePassword(email, oldPassword, newPassword) {
        const res = await fetch('/api/users/change-password', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, oldPassword, newPassword })
        });
        return await res.json();
    }
};
