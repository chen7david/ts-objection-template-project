import { Context, Next } from 'koa'
import v from 'joi'
const options = { abortEarly: false, stripUnknown: true }

export const createUser = v.object().options(options).keys({
    username: v.string().min(3).max(30).required(),
    password: v.string().min(6).max(256).required()
})

export const loginUser = v.object().options(options).keys({
    username: v.string().min(3).max(30).required(),
    password: v.string().min(6).max(256).required()
})

export const validate = (schema: v.ObjectSchema) => async function (ctx: Context, next: Next): Promise<void> {
    try {
        const body = ctx.request.body
        const { value, error } = schema.validate(body)
        if (error) ctx.throw(422, 'ValidationError', error)
        ctx.request.body = value
        await next()
    } catch (error) {
        ctx.throw(500, 'SystemError', error)
    }
}

/* Factory Middleware Export */

// const schemas: { [key: string]: any } = {
//     createUser,
//     loginUser
// }

// Object.keys(schemas).map((key) => schemas[key] = validate(schemas[key]))

// export default schemas