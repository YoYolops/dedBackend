const { Router } = require('express')
import raceManager from './controllers/raceManager';
import spellManager from './controllers/spellManager';
import monsterManager from './controllers/monsterManager';
import itemsManager from './controllers/itemsManager';

const routes = Router();

routes.get('/races', raceManager.searchRace);
routes.get('/spells', spellManager.searchSpell);
routes.get('/monsters', monsterManager.searchMonster);
routes.get('/items', itemsManager.searchItem);

export default routes;