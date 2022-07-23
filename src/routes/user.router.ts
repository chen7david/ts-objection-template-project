import Router from 'koa-router'
import UserController from '../controllers/users.controller'
const router = new Router()


// router.get('/users/:id', UserController.loadOne, UserController.find)
router.get('/users', UserController.find)

export default router