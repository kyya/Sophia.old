const CMCCInfo = require('../../model/CMCCInfo')
const moment = require('moment')
moment.locale('zh_CN')

module.exports = async ctx => {
    const [c] = await CMCCInfo.find().sort({ QueryTime: -1 }).limit(1).exec()

    ctx.state.data = {
        QueryTime: moment(c.QueryTime).fromNow(),
        MoneyUsed: c.MoneyUsed,
        MoneyLeft: c.MoneyLeft,
        GprsUsed: c.GprsUsed,
        GprsTotal: c.GprsTotal,
        GprsUsedPer: c.GprsUsedPer
    }
    await ctx.render('index', {...ctx.state.data})
}
