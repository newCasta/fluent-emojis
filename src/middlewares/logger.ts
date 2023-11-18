import { Context, Next } from 'oak'
import { env } from 'config/env.ts'
import { ENVIRONMENT } from 'config/constants.ts'

export const logger = async (ctx: Context, next: Next) => {
    const { response, request } = ctx

    await next()

    if (env.ENVIRONMENT === ENVIRONMENT.DEV) {
        const responseTime = response.headers.get('X-Response-Time')
        console.log(
            `${request.method} ${request.url.pathname} - ${responseTime}`
        )
    }
}
