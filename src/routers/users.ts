import type { D1Database } from '@cloudflare/workers-types'
import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1'
import { Todos } from '../schemas/index'

type Bindings = {
  DB: D1Database
}

const users = new Hono<{ Bindings: Bindings }>()
users.get('/', async (c) => {
  const dbEnv = c.env

  const db = drizzle(dbEnv.DB)
  const result = await db.select().from(Todos).all()

  return c.json(result)
})

export { users }
