'use strict';

const pino = require('pino')({base: null});
const logger = require('pino-caller')(pino);

const test = require('./caller-test');

test.showInfo();

logger.info('[index.js] Log in module scope, the line number should be index.js:10');
