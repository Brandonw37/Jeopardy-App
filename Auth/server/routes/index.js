'use strict';

const apiRoute = require('./apis');

//init function gets all routes and returns the next callback function.
function init(server) {
    server.get('*', function(req,res,next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });
    server.get('/', function(req, res) {
        console.log('hello')
    })

    server.use('/api', apiRoute);
};

module.exports = {
    init:init
};