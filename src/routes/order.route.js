const { Router } = require('express');

const route = Router();

route.get('/orders', (req, res) => {
  res.json({ msg: 'no orders yet bitch' });
});

module.exports = route;
