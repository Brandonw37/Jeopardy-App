'use strict';

const express =  require('express');
const apiRoutes = express.Router;
const jwt = require('jsonwebtoken');
const passport = require ('passport');
const db = require('../../../configs/db');

const model = require('../../models/User');

//http request response messages
const httpResponse = {
    onUserNotFound: {
        success: false,
        message: 'User not found.'
    },
    onAuthenticationFail: {
        success: false,
        message: 'Password did not match.'
    }
}

function loginUser(request, response) {
    let {email, password} = request.body;
    model.User.findOne(  
       { email: email },
       function(error, user) {
           if (error) throw error;
           if(!user) {
               return
               response.send(httpResponse.onUserNotFound);
           }
//check if password matches
           user.comparePassword(password, function (error, isMatch) {
               console.log(isMatch)
               console.log(password)
               console.log(error)
               if (isMatch && !error) {
                   var token = jwt.sign(user.toJSON(),db.secret,
                   {
                       expiresIn: 10080
                   });
                return response.json({
                    success: true,
                    token: 'JWT ' + token
                });
               }
            response.send(httpResponse.onAuthenticationFail);
           });
       });
};

module.exports = {loginUser:loginUser};