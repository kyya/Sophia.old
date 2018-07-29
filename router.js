const Router = require('koa-router');
const router = new Router();
const path = require('path');

router.get('/', require('./route/cmcc'));

module.exports = router;
