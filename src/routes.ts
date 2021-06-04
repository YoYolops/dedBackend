const { Router } = require('express')
import { Request, Response } from 'express';
import raceManager from './controllers/raceManager';
import spellManager from './controllers/spellManager';

const routes = Router()

routes.get('/races', raceManager.searchRace)
routes.get('/spells', spellManager.searchSpell)

export default routes