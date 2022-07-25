import Router from 'koa-router'
import * as UserController from '../controllers/users.controller'
import { requireAuth } from '../middleware/auth.middleware'
import schema from '../middleware/validation.middleware'
const router = new Router()

router
    .param('id', UserController.loadOne)
    .get('/users',schema.createUser, UserController.find)
    .post('/users', UserController.create)
    .get('/users/:id', UserController.findOne)
    .patch('/users/:id', UserController.update)
    .delete('/users/:id', UserController.remove)

export default router
