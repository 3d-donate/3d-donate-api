const {
  green,
  red,
  yellow,
  white,
  bold,
} = require('chalk');

const validateMSG = (msg) => {
  if (msg && typeof msg === 'string') {
    return true;
  }

  return false;
};

const log = (msg) => {
  if (validateMSG(msg)) {
    return console.log(
      `${green(bold('[ 3DD-API ] :'))} ${white(msg)}`
    );
  }

  return false;
};

const warn = (msg) => {
  if (validateMSG(msg)) {
    return console.log(
      `${yellow(bold('[ 3DD-API ] :'))} ${white(msg)}`
    );
  }

  return false;
};

const error = (msg) => {
  if (validateMSG(msg)) {
    return console.log(
      `${red(bold('[ 3DD-API ] :'))} ${white(msg)}`
    );
  }

  return false;
};

module.exports = { log, warn, error };
