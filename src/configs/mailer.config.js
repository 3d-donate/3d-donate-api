require('dotenv').config();

const nodemailer = require('nodemailer');

const {
  SMTP_MAIL_USER,
  SMTP_MAIL_PWD,
  SMTP_EMAIL_ADDRESS,
  SMTP_EMAIL_PORT,
} = process.env;
console.log(SMTP_EMAIL_ADDRESS);

const transporter = nodemailer.createTransport({
  host: SMTP_EMAIL_ADDRESS,
  port: SMTP_EMAIL_PORT,
  secure: true,
  service: 'gmail',
  auth: {
    user: SMTP_MAIL_USER,
    pass: SMTP_MAIL_PWD,
  },
});

module.exports = transporter;
