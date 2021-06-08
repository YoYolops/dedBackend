const spells = require('../../data/spell.json');
const races = require('../../data/races.json');
const monsters = require('../../data/monsters.json');
const items = require('../../data/items.json');

import { Request, Response } from 'express';
import { Spell, Monster, Item, Race } from '../types'

export function searchSpell(req: Request, res: Response) {
    const { name, level, type, range } = req.query

    function veryfier(value: Spell)
    {
        if ((value.level === level || !level) && (value.type === type || !type) && (value.range === range || !range)) {
            return true
        }
        return false
    }

    /* quando o name é fornecido, haverá apenas uma correspondência, sendo o uso metodo filter um desperdício de recursos computacionais  */
    if (!!name) {
        return res.json(
            spells.find(
                (spell: Spell) => spell.name === name
            )
        )
    } else {
        const response = spells.filter(veryfier)
        return res.json({spells: response})
    }
}

export function searchRace(req: Request, res: Response) {
    const { name } = req.query

    if(!!name) {
        return res.json(races.find((race: Race) => race.name === name))
    } else {
        return res.json({
            succeeded: true,
            races: races
        })
    }
}

export function searchMonster(req: Request, res: Response) {
    const { name, challengeRating, type  } = req.query

    function veryfier(monster: Monster) {
        if ((monster.challenge_rating === challengeRating || !challengeRating) && (monster.type === type || !type)) {
            return true
        } return false
    }

    /* quando o name é fornecido, haverá apenas uma correspondência, sendo o uso metodo filter um desperdício de recursos computacionais  */
    if(!!name) {
        return res.json(monsters.find((monster: Monster) => monster.name === name))
    } else {
        const response = monsters.filter(veryfier)
        return res.json({monsters: response})
    }
}

export function searchItem(req: Request, res: Response) {
    const { name, rarity, type } = req.query

    function veryfier(item: Item) {
        if((item.rarity === rarity || !rarity) && (item.type === type || !type)) {
            return true
        } return false
    }

    if(!!name) {
        return res.json(items.find((item: Item) => item.name === name))
    } else {
        const response = items.filter(veryfier)
        return res.json({items: response})
    }
}

