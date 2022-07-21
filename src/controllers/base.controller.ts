import { BaseContext } from 'koa'

export class BaseController {

    public static async getUser(): Promise<void> {

    }
}


// const { parse } = require('path')

// module.exports = (service) => ({

//     async loadOne(id, ctx, next) {
//         id = parseInt(ctx.request.params.id)
//         if (isNaN(id)) ctx.throw(404, `invalid id format`)
//         const instance = await service.findOne(id)
//         if (!instance) ctx.throw(422, 'invalid id')
//         const instanceLabel = service.getName()
//         ctx.state[instanceLabel] = instance
//         await next()
//     },

//     async find(ctx) {
//         ctx.body = await service.find()
//     },

//     async findOne(ctx) {
//         ctx.body = ctx.state[service.getName()]
//     },

//     async create(ctx) {
//         const data = ctx.request.body
//         const instance = await service.create(data)
//         ctx.body = instance
//     },

//     async patch(ctx) {
//         const instance = ctx.state[service.getName()]
//         const data = ctx.request.body
//         ctx.body = await service.patch(instance.id, data)
//     },

//     async delete(ctx) {
//         const instance = ctx.state[service.getName()]
//         ctx.body = await service.delete(instance.id)
//     },

//     async findRelated(ctx) {
//         const { name } = parse(ctx.request.path)
//         const instances = await ctx.state[service.getName()]
//             .$relatedQuery(name).orderBy('created_at', 'desc')
//         ctx.body = instances
//     },
// })