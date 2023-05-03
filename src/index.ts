import { Hono } from 'hono'
import { routers } from './routers/index'

const app = new Hono()
const router = app.route('/api/v1', routers)

export default app
