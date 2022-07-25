import Router from 'koa-router'
import * as AuthController from '../controllers/auth.controller'
import { requireAuth } from '../middleware/auth.middleware'
import { validate, loginUser } from '../middleware/validation.middleware'
const router = new Router()

router
    .post('/login', validate(loginUser), AuthController.login)
    .post('/refresh', AuthController.refresh)

export default router
