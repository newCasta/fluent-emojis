import { load } from 'dotenv'

const { PORT, ENV } = await load({ export: true })

export const env = {
    PORT: parseInt(PORT) ?? 8080,
    ENVIRONMENT: ENV ?? 'prod'
}
