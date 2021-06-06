const monsters = require('../../../data/monsters.json');
import { Request, Response } from 'express';
import { Monster } from '../../types';

class MonsterManager {
    searchMonster(req: Request, res: Response) {
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
}

export default new MonsterManager