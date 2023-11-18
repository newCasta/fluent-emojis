import emojis from 'services/data.json' assert { type: 'json' }
import { Emoji, Group } from 'types/emoji_service.ts'

export class EmojisService {
    static get(): Emoji[] {
        return emojis as unknown as Emoji[]
    }

    static getByName(name: string): Emoji {}

    static getGroups(): string[] {
        const groups = []

        for (const item of emojis) {
            groups.push(item.group)
        }

        const groupsSet = new Set(groups)

        return [...groupsSet]
    }

    static getByGroup(group: Group): Emoji[] {
        const emojis = this.get()
        const emojisByGroup = emojis.filter((emoji) => emoji.group === group)

        return emojisByGroup
    }

    static getByKeyword(keyword: string) {
        const emojis = this.get()
        const emojisByKeyword = emojis.filter((emoji) =>
            emoji.keywords.includes(keyword)
        )

        return emojisByKeyword
    }
}
