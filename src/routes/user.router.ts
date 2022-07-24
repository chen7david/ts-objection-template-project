import Router from 'koa-router'
import * as UserController from '../controllers/users.controller'
const router = new Router()

router.param('id', UserController.loadOne)
router.get('/users', UserController.find)
router.get('/users/:id', UserController.findOne)

export default router
