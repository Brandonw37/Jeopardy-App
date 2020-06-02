// this file is solely to start servers

'use strict';

const server = require('./server')();
const config = require('./configs');
const db = require('./configs/db');

server.create(config, db); //creates method on server module
server.start(); //starts Database server
