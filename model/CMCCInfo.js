const { Schema } = require('mongoose')
const { DBS, getConnection } = require('../mongo-connection')

const connection = getConnection(DBS.cmcc)

const CMCCInfoSchema = new Schema({
    QueryTime: { type: Date, default: Date.now },
    MoneyUsed: String,
    MoneyLeft: String,
    GprsUsed: String,
    GprsTotal: String,
    GprsUsedPer: String
})

const CMCCInfo = connection.model('CMCCInfo', CMCCInfoSchema)
module.exports = CMCCInfo
