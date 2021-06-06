const races = require('../../../data/races.json');
import { Request, Response } from 'express';

class RaceManager {
    searchRace(req: Request, res: Response) {
        const name = req.query.name

        for (let i = 0; i < races.length; i++) {
            if (races[i].name === name) {
                return res.json(races[i])
            }
        }
        return res.send(null) 
    }
}

export default new RaceManager