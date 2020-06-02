const dotenv = require('dotenv').config();
const db = process.env.DB;
const psw = process.env.PSW;

module.exports = {
    'secret':'putsomethingsecrethere',
    'database':`mongodb+srv://${db}:${psw}@blogusers-lc0gv.mongodb.net/test?retryWrites=true&w=majority`
};