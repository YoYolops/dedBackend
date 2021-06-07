const { Router } = require('express')
import { searchRace, searchSpell, searchMonster, searchItem } from './controllers/dataManager';
import { registerNewCharacter } from './controllers/authManager'

const routes = Router();

routes.get('/races', searchRace);
routes.get('/spells', searchSpell);
routes.get('/monsters', searchMonster);
routes.get('/items', searchItem);

routes.post('/register', registerNewCharacter);

export default routes;