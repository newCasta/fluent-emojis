export interface Emoji {
    name: string
    fromVersion: FromVersion
    group: Group
    keywords: string[]
    hasTones: boolean
    styles: Styles
}

export enum FromVersion {
    The06 = '0.6',
    The07 = '0.7',
    The10 = '1.0',
    The110 = '11.0',
    The120 = '12.0',
    The121 = '12.1',
    The130 = '13.0',
    The131 = '13.1',
    The140 = '14.0',
    The20 = '2.0',
    The30 = '3.0',
    The40 = '4.0',
    The50 = '5.0'
}

export enum Group {
    Activities = 'Activities',
    AnimalsNature = 'Animals & Nature',
    Flags = 'Flags',
    FoodDrink = 'Food & Drink',
    Objects = 'Objects',
    PeopleBody = 'People & Body',
    SmileysEmotion = 'Smileys & Emotion',
    Symbols = 'Symbols',
    TravelPlaces = 'Travel & Places'
}

export interface Styles {
    '3d'?: string
    color?: string
    flat?: string
    highContrast?: string
    dark?: TonesStyles
    default?: TonesStyles
    light?: TonesStyles
    medium?: TonesStyles
    mediumDark?: TonesStyles
    mediumLight?: TonesStyles
}

export interface TonesStyles {
    '3d': string
    color: string
    flat: string
    highContrast: string
}
