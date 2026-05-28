// Logic for handling cart/deposits
const Cart = {
    getDepositAmount(price) {
        return price * 0.1; // 10% deposit
    },
    
    async submitDeposit(orderData) {
        return await API.createOrder(orderData);
    }
};
