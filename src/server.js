const app = require('./app');
const appLogger = require('./utils/appLogger');
const MailService = require('./configs/mailer.config');

const PORT = 3005 || process.env.PORT;

app.listen(PORT, (err) => {
  if (!err) {
    appLogger.log(`Server is live. PORT : ${PORT}`);
    return MailService.verify((error) => {
      if (error) {
        appLogger.error('Mail server cannot be reached!');
      } else {
        appLogger.log('Mail server is ready!');
      }
    });
  }

  return appLogger.error(`Something went wrong!`);
});
