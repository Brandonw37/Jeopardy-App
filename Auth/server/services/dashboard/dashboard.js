'use strict';

const express = require('express');
const model = require('../../models/User');

function jeopardyQuestions(request, response) {
    var newUser2 = {
        question1: request.body.question1,
        question2: request.body.question2,
        question3: request.body.question3,
        question4: request.body.question4,
        question5: request.body.question5,
        question6: request.body.question6,
        question7: request.body.question7,
        question8: request.body.question8,
        question9: request.body.question9
    };
        model.Jep.update(newUser2, err => {
            if (err) {
                return response.json(err)
            }
            return response.json(newUser2);
        });
    }
//}

function getDashboard(request, response) {
    response.json({ success: true });
};

module.exports = {
    getDashboard: getDashboard,
    jeopardyQuestions: jeopardyQuestions
};