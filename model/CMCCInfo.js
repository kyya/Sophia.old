const { Schema } = require('mongoose')
const connection = require('../mongo-connection')

const CMCCInfoSchema = new Schema({
    QueryTime: { type: Date, default: Date.now },
    MoneyUsed: String,
    MoneyLeft: String,
    GprsUsed: String,
    GprsTotal: String,
    GprsUsedPer: String
});
/**
{ 
    QueryTime: '几秒前',
    MoneyUsed: '1.97',
    MoneyLeft: '50.75',
    GprsUsed: '1525.58',
    GprsTotal: '43008.00',
    GprsUsedPer: '3.5%'
}
 */
const CMCCInfo = connection.model('CMCCInfo', CMCCInfoSchema)
module.exports = CMCCInfo
