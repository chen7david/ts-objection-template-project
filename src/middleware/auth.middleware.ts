import { Context, Next } from "koa";

export async function requireAuth(ctx: Context, next: Next): Promise<void> {
    console.log('hello from middleware...')
    await next()
}