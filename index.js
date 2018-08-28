const Koa = require('koa');
const cors = require('@koa/cors')
const static = require('koa-static');
const render = require('koa-ejs');
const path = require('path');
const app = new Koa();
const config = require('./config')
const router = require('./router');

const logger = require('./utils/logger.js');
const onerror = require('./middleware/onerror');
app.use(cors());
// error
app.use(onerror);
// 模板引擎
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'ejs',
  cache: false,
  debug: false
});
// 静态资源
app.use(static('./source'));
// 路由
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, ()=>{
  logger.info(`Sophia Start! Listening on http://localhost:${config.port}`);
});
