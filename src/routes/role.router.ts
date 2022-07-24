import Router from 'koa-router'
import * as RoleController from '../controllers/roles.controller'
const router = new Router()

router
    .param('id', RoleController.loadOne)
    .get('/roles', RoleController.find)
    .post('/roles', RoleController.create)
    .get('/roles/:id', RoleController.findOne)
    .patch('/roles/:id', RoleController.update)
    .delete('/roles/:id', RoleController.remove)

export default router
