const app = require('./app');
const appLogger = require('./utils/appLogger');

const PORT = 3005 || process.env.PORT;

app.listen(PORT, (err) => {
  if (!err) {
    return appLogger.log(`Server is live. PORT : ${PORT}`);
  }

  return appLogger.error(`Something went wrong!`);
});
