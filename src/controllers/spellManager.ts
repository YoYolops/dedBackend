const races = require('../../data/spell.json');
import { Request, Response } from 'express';
import { Spell } from '../types'

class SpellManager {

    searchSpell(req: Request, res: Response) {
        const { name, level, type, range } = req.query
        console.log(name, level)

        function veryfier(value: Spell)
        {
            if ((value.name === name || !name) && (value.level === level || !level) && (value.type === type || !type) && (value.range === range || !range)) {
                return true
            }

            return false
        }

        const response = races.filter(veryfier)
        res.json({spells: response})
    }
};

export default new SpellManager;