const Product = {
    renderVehicleCard(v) {
        return `
            <div class="vehicle-card" onclick="window.location.href='/product-detail?id=${v._id}'" style="cursor: pointer; border-radius: 2px;">
                <div class="card-img-container" style="border-radius: 2px;">
                    <img src="${v.images && v.images[0] ? v.images[0] : 'https://via.placeholder.com/400x250?text=No+Image'}" alt="${v.name}">
                </div>
                <div class="card-info" style="text-align: center; padding: 1.5rem 1rem;">
                    <h3 class="card-name" style="font-family: 'Inter', sans-serif; font-weight: 300; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-white); margin-bottom: 0.5rem; min-height: 2.5rem; display: flex; align-items: center; justify-content: center;">${v.name}</h3>
                    <div class="card-price" style="font-family: 'Inter', sans-serif; font-size: 1.2rem; font-weight: 600; color: var(--text-white); margin: 0.2rem 0; display: flex; justify-content: center; align-items: center; gap: 0.3rem;">
                        <span>${new Intl.NumberFormat('vi-VN').format(v.price)}</span>
                        <span style="font-size: 0.9rem; font-weight: 500; opacity: 0.8;">VNĐ</span>
                    </div>
                    <div class="card-specs" style="display: flex; justify-content: center; gap: 0.8rem; color: var(--text-muted); font-size: 0.75rem; letter-spacing: 1px; margin-top: 1rem; text-transform: uppercase; font-weight: 400;">
                        <span>${v.year || '2023'}</span>
                        <span style="opacity: 0.3;">|</span>
                        <span>${v.fuel || 'Xăng'}</span>
                        <span style="opacity: 0.3;">|</span>
                        <span>${new Intl.NumberFormat('vi-VN').format(v.mileage || 0)} KM</span>
                    </div>
                    <div style="margin-top: 1.5rem; font-size: 0.85rem; color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; justify-content: center; gap: 0.3rem; transition: 0.3s;" class="explore-link">
                        Khám phá thêm <span style="font-size: 1.1rem; line-height: 1;">›</span>
                    </div>
                </div>
            </div>
        `;
    }
};
