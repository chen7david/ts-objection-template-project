import Koa from 'koa'
import cors from 'kcors'
import bodyparser from 'koa-body'
import config from './config'
import router from './routes/index.routes'
import { interceptor } from './middleware/error.middleware'
import url from 'url'

const app = new Koa()
const port = config.server.port
const host = url.format(config.server)

app.use(interceptor)
app.use(router())
app.use(cors())
app.use(bodyparser())

app.listen(port, () => console.log('running at: %s', host))
