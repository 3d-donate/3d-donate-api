const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(
  bodyParser.json({
    limit: '50mb',
    extended: true,
  })
);
app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
  })
);
app.use(
  cors({
    origin: [
      'http://localhost:3005',
      'https://3ddonate.com',
    ],
  })
);

app.use('/api/', routes);

module.exports = app;
