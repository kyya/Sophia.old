const fetch = require ('node-fetch')
const config = {
    url: 'http://wap.10086.cn/wwwApp-web/interfaceService/planRamainQry.do',
    referer: 'http://wap.10086.cn/wd/index.html',
    cookie: 'JSESSIONID=C3A1CE71A7D292B892BA73D820F27CE4.tomcat1; collect_id=h5mmp4vujcado8cbk1408go4eqpfp5ew; CaptchaCode=qCrFMP; rdmdmd5=1FFA70336AA0F12A776D41B4DC887F33; lgToken=96852d68b3ce4ecf980eadece909b31a; is_login=true; defaultloginuser_p=izr73fwOUuimT7R+YElqbvQdIEKrmWCpu49KY4pe7cglQnOlbxDN0nqcpR0yt5wiIU6Mjw2cFGiqccIsrNqK/CMTsRVyT13VInOal6sQlEadt/KkBQHpnISURF30i3h1NIChi3gihwmhVzzoGOae/UlwSuMBUjy2iVbXK4nlqZiNwSyqpJkEqg/LuT1QHsyO; c=f81bb3c9568c4ad2b1388252d849def7; verifyCode=25bcc4dc50c8b3c959d703c27cc52bc4f9674235; CmLocation=250|250; CmProvid=js; key4IE89=2382ED2FAD9AD795B9073DAB21E93F41FB646C80D0446C0CA6FF5032A7601ABA8053FB917E78BE4EDCE8A3497EAA70CB; province_city=250|250; JSESSIONID=02B7C4ABF85F77981E1518DD786EDB4B.tomcat3; CmChannelID=h5; WT_FPC=id=2c2d52f8e85faa3c4921533199332905:lv=1533199624378:ss=1533199332905',
    param: 'requestJson=%7B%22serviceName%22%3A%22if007_query_package_margin%22%2C%22header%22%3A%7B%22version%22%3A%221.0%22%2C%22timestamp%22%3A1533199636151%2C%22digest%22%3A%22NmYxZjA4YmRiMDJmNmY5ZjczMDcxYmM0OTA3MGMyNjM%3D%22%2C%22conversationId%22%3A%2220180802164716151494918%22%7D%2C%22data%22%3A%7B%22channelId%22%3A%220900%22%7D%7D',
    header: {
        'X-Requested-With': 'XMLHttpRequest'
    }
}
//module.exports = async ctx => {
;(async () => {
    const res = await fetch(config.url, { 
        method: 'POST',
        headers: config.header,
        body: config.param
    }).then(res=>res.text())
    console.log(res)
})();
  
//}
