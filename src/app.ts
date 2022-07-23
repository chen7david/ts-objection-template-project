import Koa from 'koa'
import cors from 'kcors'
import bodyparser from 'koa-body'
import dotenv from 'dotenv'
import router from './routes/index.routes'
dotenv.config({ path: '../.env' })
const app = new Koa()
const port = process.env.APP_PORT || 3000
const host = process.env.APP_PORT || 'http://localhost'

app.use(router())
app.use(cors())
app.use(bodyparser())

app.listen(port, () => console.log('running at: %s:%s', host, port))
