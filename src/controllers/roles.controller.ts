import * as RoleService from '../services/roles.services'
import { Next, Context } from 'koa'

export async function loadOne(roleId: string, ctx: Context, next: Next): Promise<void> {
    let id = parseInt(roleId)
    if (isNaN(id)) ctx.throw(404, `invalid id format`)
    const instance = await RoleService.findOne(id)
    if (!instance) ctx.throw(422, 'invalid id')
    ctx.state['role'] = instance
    await next()
}

export async function find(ctx: Context): Promise<void> {
    ctx.body = await RoleService.find()
}

export async function findOne(ctx: Context): Promise<void> {
    ctx.body = ctx.state.role
}

export async function create(ctx: Context): Promise<void> {
    const role = await RoleService.create(ctx.request.body)
    ctx.body = role
}

export async function update(ctx: Context): Promise<void> {
    const roleInfo = ctx.state.role
    const data = ctx.request.body
    const success = await RoleService.update(roleInfo, data)
    ctx.body = { success }
}

export async function remove(ctx: Context): Promise<void> {
    const roleInfo = ctx.state.role
    const success = await RoleService.remove(roleInfo)
    ctx.body = { success }
}