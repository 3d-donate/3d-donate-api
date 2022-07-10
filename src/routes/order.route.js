const { Router } = require('express');

const route = Router();

route.get('/orders', (req, res) => {
  res.json({ msg: 'no orders yet bitch' });
});

route.post('/newOrder', (req, res) => {
  res.status(200);
});

module.exports = route;
