import { Context, Next } from "koa";

export async function interceptor(ctx: Context, next: Next): Promise<void> {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.type = 'json';
        ctx.body = ctx.status != 500 ? err : { message: 'server error' };
        ctx.app.emit('error', err, ctx);
    }
}