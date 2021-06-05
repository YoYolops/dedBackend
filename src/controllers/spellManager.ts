const spells = require('../../data/spell.json');
import { Request, Response } from 'express';
import { Spell } from '../types'

class SpellManager {

    searchSpell(req: Request, res: Response) {
        const { name, level, type, range } = req.query

        function veryfier(value: Spell)
        {
            if ((value.name === name || !name) && (value.level === level || !level) && (value.type === type || !type) && (value.range === range || !range)) {
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
};

export default new SpellManager;