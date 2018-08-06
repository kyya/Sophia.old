const mongoose = require('mongoose')

const config = { useNewUrlParser: true }

const DBS = {
    cmcc: 'mongodb://cmcc:kikookik@dev.kiko.space:27017/cmcc',
    friends: 'mongodb://Anapopo:kikookik@dev.kiko.space:27017/friends'
}

function getConnection(DBS_NAME) {
    return mongoose.createConnection(DBS_NAME, config);
}
module.exports = { DBS, getConnection }
