const Router = require('koa-router');
const router = new Router();

router.get('/api/cmcc/', require('./route/cmcc/cmcc_list'));
router.get('/api/cmcc/update/', require('./route/cmcc/cmcc_update'));
router.get('/api/', ctx=>ctx.body = JSON.stringify({ name: 'Sophia', version: 'v1'}, null, 2))
router.get('/api/friend/', require('./route/friend/friends_list'))

module.exports = router;
