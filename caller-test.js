'use strict';

const pino = require('pino')({base: null});
const logger = require('pino-caller')(pino);

logger.info('[caller-test.js] Log in module scope, the line number should be caller-test.js:6');

module.exports = {
  showInfo,
};
  
function showInfo () {
  logger.info('[caller-test.js] Log in function scope, the line number should be caller-test.js:13');
};
