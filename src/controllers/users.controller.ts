import * as UserService from '../services/users.services'
import { Next, Context, ParameterizedContext } from 'koa'
import Router from 'koa-router'

export async function loadOne(_id: string, ctx: Context, next: Next): Promise<void> {
    let id = parseInt(_id)
    if (isNaN(id)) ctx.throw(404, `invalid id format`)
    const instance = await UserService.findOne(id)
    if (!instance) ctx.throw(422, 'invalid id')
    ctx.state['user'] = instance
    await next()
}

export async function find(ctx: Context): Promise<void> {
    // const user = await UserService.create({
    //     username: 'david',
    //     password: '88888',
    // })
    // console.log(user)
    ctx.body = await UserService.find()
}

export async function findOne(ctx: Context): Promise<void> {
    ctx.body = ctx.state.user
}

