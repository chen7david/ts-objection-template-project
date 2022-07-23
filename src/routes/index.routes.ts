import combine from 'koa-combine-routers'
import UserRoutes from './user.router'


export default combine(
    UserRoutes
)