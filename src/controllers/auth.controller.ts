import * as UserService from '../services/users.services'
import * as AuthService from '../services/auth.services'
import { Context } from 'koa'

export async function login(ctx: Context): Promise<void> {
    const { username, password } = ctx.request.body
    const user = await UserService.findOneByUsername(username)
    if (!user) ctx.throw(422, 'invalid username')
    const validPassword = await UserService.verifyPassword(user, password)
    if (!validPassword) ctx.throw(422, 'invalid password')
    ctx.body = {
        user,
        accessToken: AuthService.signAccessToken(user.id),
        refreshToken: AuthService.signRefreshToken(user.id),
    }
}

export async function refresh(ctx: Context): Promise<void> {
    const { refreshToken } = ctx.request.body
    const { userId } = AuthService.verifyRefreshToken(refreshToken)
    const user = await UserService.findOne(userId)
    if(!user) ctx.throw(401, 'invalid refresh token')
    ctx.body = {
        user,
        accessToken: AuthService.signAccessToken(user.id),
        refreshToken: AuthService.signRefreshToken(user.id),
    }
}