type Action = {
    attack_bonus?: string,
    damage_dice?: string,
    name: string,
    desc: string
}

type SpecialAbilities = {
    desc: string,
    name: string
}

export interface Spell {
    id: number,
    name: string,
    level: string,
    type: string,
    conjurationTime: string,
    range: string,
    duration: string,
    description: string
}

export interface Monster { /* interface incompleta, exitem keys que ainda não foram adicionadas */
    actions: Array<Action>,
    alignment: string,
    armor_class: string,
    armor_desc: string,
    challenge_rating: string,
    charisma: string,
    constitution: string,
    damage_immunities: string,
    dexterity: string,
    hit_dice: string,
    hit_points: string,
    intelligence: string,
    languages: string,
    name: string,
    senses: string,
    size: string,
    special_abilities: Array<SpecialAbilities>,
    speed: string,
    speed_json?: {
        walk: number,
        fly?: number
    },
    strength: string,
    subtype?: string,
    type: string,
    wisdom: string,
    legendary_action?: Array<Action>
}

export interface Item {
    id: number,
    name: string,
    rarity: string,
    imageUrl: string,
    description: string,
    atk: string,
    def: string,
    wight: string,
    type: string,
}
