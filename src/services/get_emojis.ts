import { getTree } from 'services/fluent_emoji_tree.ts'
import { ASSETS_SHA } from 'config/constants.ts'

export const getEmojis = async () => {
    const emojisAssets = await getTree(ASSETS_SHA)
}
