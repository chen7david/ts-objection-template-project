import UserService from '../services/users.services'
import { Next, Context } from 'koa'
import Router from 'koa-router'

async function loadOne(id: number, ctx: Context, next: any): Promise<void> {
    id = parseInt(ctx.params.id)
    if (isNaN(id)) ctx.throw(404, `invalid id format`)
    const instance = await UserService.findOne(id)
    if (!instance) ctx.throw(422, 'invalid id')
    ctx.state['user'] = instance
    await next()
}

async function find(ctx: Context): Promise<void> {
    ctx.body = await UserService.find()
}

export default {
    find,
    loadOne
}