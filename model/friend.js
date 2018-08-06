const { Schema } = require('mongoose')
const { DBS, getConnection } = require('../mongo-connection')
const connection = getConnection(DBS.friends)

const FriendSchema = new Schema({
    name: String,
    link: String,
    avatar: String,
    desc: String
});

const Friend = connection.model('Friend', FriendSchema)
module.exports = Friend
