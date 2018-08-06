const CMCCInfo = require('../../model/CMCCInfo')
const moment = require('moment')
moment.locale('zh_CN')

module.exports = async ctx => {
    let [data] = await CMCCInfo.find({}, { _id: false, __v: false })
                .sort({ QueryTime: -1 }).limit(1).lean()
    // Reference https://www.jianshu.com/p/e78fa39aa43f
    // 调用 lean() 函数以便于修改 Mongoose 查询返回的对象

    data.QueryTime = moment(data.QueryTime).fromNow()
    // console.log(data)
    ctx.body = JSON.stringify(data, null, 2)
}
