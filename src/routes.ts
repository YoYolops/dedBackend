const { Router } = require('express')
import { Request, Response } from 'express';
import raceManager from './controllers/raceManager';
import spellManager from './controllers/spellManager';
import monsterManager from './controllers/monsterManager';

const routes = Router()

routes.get('/races', raceManager.searchRace)
routes.get('/spells', spellManager.searchSpell)
routes.get('/monsters', monsterManager.searchMonster)

export default routes