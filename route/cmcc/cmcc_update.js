const fetch = require('node-fetch')
const CMCCInfo = require('../../model/CMCCInfo')
const headers = {
    'Referer': 'http://wap.js.10086.cn/index.thtml',
    'Cookie': 'autoLogin=15BD25DC3FB584C380EBE49A46AC1D4549119374649EF49E; last_success_login_mobile=15195973003; JSESSIONID=11E20EC6D1BFB14E8F5537FEC468452C; cmtokenid=72D3096149C949B2A4C13F8A2BC298D1@js.ac.10086.cn; XWBD_SESSIONID=S073010352593030046; WT_FPC=id=2583e795ad09483ce841501076399783:lv=1501385547257:ss=1501382105379; WAP_SESSIONID=rS83Z9TP4KyKqpQTjF1KxmfT8nHHQKmXJJC9dBhP20QMKHZ2B51n!-698742978; userMobileForBigData=15195973003; userAreaNum=14; CmWebtokenid=15195973003,js',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36',
    'Content-type': 'application/x-www-form-urlencoded'
}
const param = 'reqUrl=indextopnewBarQuery&ver=t&browserFinger=4719c70014aa53b8c9038dad0cb4ec0f'

module.exports = async ctx => {
    const c = await fetch('http://wap.js.10086.cn/actionDispatcher.do', {
        method: 'POST',
        headers,
        body: param
    })
    .then(res=>{
        if (res.status == 403)
            throw new Error('Forbidden')
        return res.json()
    })
    .then(json=>json.resultObj)

    ctx.state.data = {
        QueryTime: Date.now(),
        MoneyUsed: c.monthSells,
        MoneyLeft: c.scoress,
        GprsUsed: c.tyUsedGprs,
        GprsTotal: c.tyTotalGprs,
        GprsUsedPer: Number(c.tyUsedGprs / c.tyTotalGprs * 100).toFixed(1) + '%'
    }
    const instance = await CMCCInfo.create(ctx.state.data);
    
    ctx.status = 200
    ctx.body = instance.toJSON()
}
