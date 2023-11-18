import { Router } from 'oak'

const emojis = new Router()
const router = new Router()

router.get('/', (ctx) => {
    ctx.response.body = {
        message: 'all good'
    }
})

emojis.use('/emojis', router.routes())

export default emojis
