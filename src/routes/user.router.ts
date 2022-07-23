import Router from 'koa-router'
import usersController from '../controllers/users.controller'
import UserController from '../controllers/users.controller'
const router = new Router()

router.get('/users', usersController.find)

export default router