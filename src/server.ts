import Koa from 'koa'
import cors from 'kcors'
import bodyparser from 'koa-body'
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
const app = new Koa()

app.use(cors())
app.use(bodyparser())









