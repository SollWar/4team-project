import { serve } from '@hono/node-server'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'

const app = new Hono()

// Middleware оставляем как есть
app.use(
  '/api/*',
  cors({
    origin: 'http://localhost:3000',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }),
)

const userSchema = z.object({
  username: z.string().min(3, 'Минимум 3 символа'),
  email: z.email('Некорректный email'),
  age: z.number().min(18, 'Только для взрослых 18+'),
})

const routes = app
  .post(
    '/api/register',
    zValidator('json', userSchema, (result, c) => {
      if (!result.success) {
        return c.json(
          {
            success: false,
            error: result.error.issues[0].message,
          },
          400,
        )
      }
    }),
    (c) => {
      const data = c.req.valid('json')
      return c.json(
        { success: true, message: `Пользователь ${data.username} создан` },
        201,
      )
    },
  )
  .get('/api/hello', (c) => {
    return c.json({ message: 'Hello from Hono!' })
  })

// Экспортируем тип именно от константы с маршрутами
export type AppType = typeof routes
export default app

const port = 4000
console.log(`Server is running on port ${port}`)

serve({ fetch: app.fetch, port })
