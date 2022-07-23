import UserService from '../services/roles.services'
import { Next, Context } from 'koa'

async function loadOne(ctx: Context, next: Next): Promise<void> {
    const id = parseInt(ctx.params.id)
    if (isNaN(id)) ctx.throw(404, `invalid id format`)
    const instance = await UserService.findOne(id)
    if (!instance) ctx.throw(422, 'invalid id')
    ctx.state['user'] = instance
    await next()
}

async function find(ctx: Context): Promise<void> {
    ctx.body = await UserService.find()
}

async function findOne(ctx: Context): Promise<void> {
    ctx.body = await UserService.find()
}

export default {
    find,
    loadOne
}