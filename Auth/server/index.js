//server file

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');

module.exports = function() {
    let server = express(),
    create,
    start;

create = function (config , db) {
    let routes = require('./routes');

//server settings
server.set('env', config.env);
server.set('port', config.port);
server.set('hostname', config.hostname);

//return middleware that parses json
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use(cookieParser());
server.use(logger('dev'));
server.use(passport.initialize());
require('../configs/passport')(passport);
mongoose.connect(db.database, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true });

//set up routes
routes.init(server);
};

start=function() {
    let hostname = server.get('hostname'),
    port = server.get('port');

    server.listen(port, function() {
        console.log('Express server listening on -http://' + hostname + ':' + port);
});
};

//return both create and start functions to mkae them available for other modules to use.
return {
    create:create,
    start:start
};
};