import { Hono } from 'hono'
import { todos } from './todos'
import { users } from './users'

const routers = new Hono()

routers.route('/todos', todos)
routers.route('/users', todos)

export { routers }
