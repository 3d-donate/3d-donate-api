const { Router } = require('express');

const route = Router();
const OrderRoute = require('./order.route');

route.use('/order', OrderRoute);

module.exports = route;
