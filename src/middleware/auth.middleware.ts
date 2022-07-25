import { Context, Next } from "koa";
import * as AuthService from '../services/auth.services'
import * as UserSerive from '../services/users.services'
import { JsonWebTokenError } from 'jsonwebtoken'

export async function requireAuth(ctx: Context, next: Next): Promise<void> {
    console.log('hello from middleware...')
    const bearer = ctx.headers['authorization']
    if (!bearer) ctx.throw(401, 'authentication required')
    const token = bearer.replace('Bearer ', '')
    try {
        const payload = AuthService.verifyAccessToken(token)
        const user = await UserSerive.findOne(payload.userId)
        if (!user) ctx.throw(401, 'invalid jwt')
        if (user.is_active) ctx.throw(401, 'this account has been disabled, please contact admin')
        ctx.state['$user'] = user
        return await next()
    } catch (error) {
        console.log(error)
        if (error instanceof JsonWebTokenError)
            return ctx.throw(401, error.message)
        else
            return ctx.throw(error.status, error)
    }
}