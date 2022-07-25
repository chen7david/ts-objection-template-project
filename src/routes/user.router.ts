import Router from 'koa-router'
import * as UserController from '../controllers/users.controller'
import { requireAuth } from '../middleware/auth.middleware'
import { validate, createUser } from '../middleware/validation.middleware'
const router = new Router()

router
    .param('id', UserController.loadOne)
    /* PUBLIC ROUTES */
    .post('/register', validate(createUser), UserController.create)
    /* AUTHENTICATED ROUTES */
    // .use(requireAuth)
    .get('/users', UserController.find)
    .post('/users', validate(createUser), UserController.create)
    .get('/users/:id', UserController.findOne)
    .patch('/users/:id', UserController.update)
    .delete('/users/:id', UserController.remove)
    .get('/users/:id/roles', UserController.findRoles)
    .post('/users/:id/roles', UserController.addRole)
    .delete('/users/:id/roles', UserController.removeRole)

export default router
