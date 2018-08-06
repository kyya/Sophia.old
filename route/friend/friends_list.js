const Friend = require('../../model/friend')

module.exports = async ctx => {
    const pretty = ctx.query.pretty
    const data = await Friend.find({}, { _id: false, __v: false })
    //console.log(typeof pretty)
    ctx.body = (pretty=='1' ? JSON.stringify(data, null, 2) : data)
}
