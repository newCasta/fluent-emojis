import app from './src/settings.ts'
import { ENVIRONMENT } from 'config/constants.ts'
import { env } from 'config/env.ts'

if (env.ENVIRONMENT === ENVIRONMENT.DEV) {
    app.addEventListener('listen', () => {
        console.log('Listening on http://localhost:8080')
    })
}

await app.listen({
    port: env.PORT
})
