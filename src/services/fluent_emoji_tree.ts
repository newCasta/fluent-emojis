import axios from 'npm:axios'
import { FLUENT_EMOJI_TREE_URL } from 'config/constants.ts'

const instance = axios.create({
    baseURL: FLUENT_EMOJI_TREE_URL
})

export const getTree = async (sha: string) => {
    const { data } = await instance.get(`/${sha}`)

    return data
}
