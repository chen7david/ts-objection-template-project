import combine from 'koa-combine-routers'
import UserRoutes from './user.router'
import RoleRoutes from './role.router'


export default combine(
    UserRoutes,
    RoleRoutes
)