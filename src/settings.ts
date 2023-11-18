import { Application } from 'oak'
import { oakCors as cors } from 'cors'
import { logger } from 'middlewares/logger.ts'
import { timing } from 'middlewares/timing.ts'
import { error } from 'middlewares/error.ts'
import { routes } from 'routes/index.ts'

const app = new Application()

app.use(cors())
app.use(logger)
app.use(timing)
app.use(error)

app.use(routes.emojis.routes())
app.use(routes.emojis.allowedMethods())

app.use((ctx) => {
    ctx.throw(404)
})

export default app
