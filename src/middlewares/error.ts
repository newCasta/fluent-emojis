import { Context, Next, isHttpError, Status } from 'oak'

export const error = async (ctx: Context, next: Next) => {
    const { response } = ctx

    try {
        await next()
    } catch (err) {
        if (isHttpError(err)) {
            switch (err.status) {
                case Status.NotFound:
                    response.body = {
                        error: 'Not found'
                    }

                    break
                default:
                    response.body = {
                        error: 'Internal error'
                    }
            }
        } else {
            throw err
        }
    }
}
