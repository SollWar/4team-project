import { hc } from 'hono/client'

import type { AppType } from '../../../4team-server/src/index'

export const client = hc<AppType>('http://localhost:4000/')
