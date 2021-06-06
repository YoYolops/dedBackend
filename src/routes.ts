const { Router } = require('express')
import RaceManager from './controllers/gameDataManagers/raceManager';
import SpellManager from './controllers/gameDataManagers/spellManager';
import MonsterManager from './controllers/gameDataManagers/monsterManager';
import ItemsManager from './controllers/gameDataManagers/itemsManager';
import AuthManager from './controllers/authManager'

const routes = Router();

routes.get('/races', RaceManager.searchRace);
routes.get('/spells', SpellManager.searchSpell);
routes.get('/monsters', MonsterManager.searchMonster);
routes.get('/items', ItemsManager.searchItem);

routes.post('/register', AuthManager.registerNewCharacter)

export default routes;