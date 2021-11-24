const db = require('database');

function createOrder(type, currency, amount) {
    db.insert('Order', {type, currency, amount});
}

module.exports = {
    createOrder,
};
