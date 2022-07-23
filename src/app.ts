import Koa from 'koa'
import cors from 'kcors'
import bodyparser from 'koa-body'
import dotenv from 'dotenv'
import UserRouter from './routes/user.router'
dotenv.config({ path: '../.env' })
const app = new Koa()
const port = process.env.APP_PORT || 3000
const host = process.env.APP_PORT || 'http://localhost'

app.use(UserRouter.routes())
app.use(cors())
app.use(bodyparser())

app.listen(port, () => console.log('running at: %s:%s', host, port))
