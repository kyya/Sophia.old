const mongoose = require('mongoose')

// connect('mongodb://localhost/cmcc')

const connection = mongoose.createConnection('mongodb://localhost/cmcc');

module.exports = connection
