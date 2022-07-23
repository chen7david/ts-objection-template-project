import UserService from '../services/users.services'
import { BaseContext } from 'koa'

async function find(ctx: BaseContext): Promise<void> {
    ctx.body = await UserService.find()
}

export default {
    find
}