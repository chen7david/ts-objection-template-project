import * as RoleService from '../services/roles.services'
import { Next, Context } from 'koa'

export async function loadOne(id, ctx: Context, next: () => Promise<any>): Promise<void> {
    id = parseInt(ctx.params.id)
    if (isNaN(id)) ctx.throw(404, `invalid id format`)
    const instance = await RoleService.findOne(id)
    if (!instance) ctx.throw(422, 'invalid id')
    ctx.state['user'] = instance
    return next()
}

export async function find(ctx: Context): Promise<void> {
    ctx.body = await RoleService.find()
}

export async function findOne(ctx: Context): Promise<void> {
    ctx.body = await RoleService.find()
}
