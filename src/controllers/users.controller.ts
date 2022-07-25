import * as UserService from '../services/users.services'
import { Next, Context } from 'koa'

export async function loadOne(userId: string, ctx: Context, next: Next): Promise<void> {
    let id = parseInt(userId)
    if (isNaN(id)) ctx.throw(404, `invalid id format`)
    const instance = await UserService.findOne(id)
    if (!instance) ctx.throw(422, 'invalid id')
    ctx.state['user'] = instance
    await next()
}

export async function find(ctx: Context): Promise<void> {
    let { p, l } = ctx.request.query
    ctx.body = await UserService.paginatedFind(p, l)
}

export async function findOne(ctx: Context): Promise<void> {
    ctx.body = ctx.state.user
}

export async function create(ctx: Context): Promise<void> {
    const user = await UserService.create(ctx.request.body)
    ctx.body = user
}

export async function update(ctx: Context): Promise<void> {
    const userInfo = ctx.state.user
    const data = ctx.request.body
    const success = await UserService.update(userInfo, data)
    ctx.body = { success }
}

export async function remove(ctx: Context): Promise<void> {
    const userInfo = ctx.state.user
    const success = await UserService.remove(userInfo)
    ctx.body = { success }
}

/* CUSTOM */
export async function usernameTaken(ctx: Context): Promise<void> {
    const { username } = ctx.request.body
    const taken = await UserService.usernameTaken(username)
    ctx.body = { available: !taken }
}

export async function findRoles(ctx: Context): Promise<void> {
    ctx.body = await UserService.findRoles(ctx.state.user)
}

export async function addRole(ctx: Context): Promise<void> {
    const { roleId } = ctx.request.body
    ctx.body = await UserService.addRole(ctx.state.user, 1)
}

export async function removeRole(ctx: Context): Promise<void> {
    // const { roleId } = ctx.request.body
    ctx.body = await UserService.removeRole(ctx.state.user, 1)
}

