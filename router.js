const Router = require('koa-router');
const router = new Router();
const path = require('path');

router.get('/', require('./route/cmcc/cmcc_get'));
router.get('/api/cmcc/update', require('./route/cmcc/cmcc_update'));

module.exports = router;
