const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const appLogger = require('./utils/appLogger');

const app = express();
const PORT = 3005 || process.env.PORT;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({ origin: ['http://localhost:3005', 'https://3ddonate.com'] }));

app.get('/', (req, res) => {
  res.send('fucked up');
});

app.listen(PORT, (err) => {
  if (!err) {
    return appLogger.log(`Server is live. PORT : ${PORT}`);
  }

  return appLogger.error(`Something went wrong!`);
});
