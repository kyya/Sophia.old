const logger = require('../utils/logger');

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        logger.error('Promise error: ' + (err instanceof Error ? err.stack : err));
        ctx.set({
            'Content-Type': 'text/html; charset=UTF-8',
        });
        ctx.body = `发生了一些意外: <pre>${err instanceof Error ? err.stack : err}</pre>`;
        ctx.status = 404;
    }
};
