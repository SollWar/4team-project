import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Middleware оставляем как есть
app.use(
  '/api/*',
  cors({
    origin: 'http://localhost:3000',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }),
)

const routes = app.get('/api/hello', (c) => {
  return c.json({
    message: 'Hello from Honos!',
  })
})

// Экспортируем тип именно от константы с маршрутами
export type AppType = typeof routes
export default app

const port = 4000
console.log(`Server is running on port ${port}`)

serve({ fetch: app.fetch, port })
