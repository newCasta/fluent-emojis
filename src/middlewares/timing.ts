import { Context, Next } from 'oak'

export const timing = async (ctx: Context, next: Next) => {
    const { response } = ctx

    const start = Date.now()

    await next()

    const ms = Date.now() - start
    response.headers.set('X-Response-Time', `${ms}ms`)
}
