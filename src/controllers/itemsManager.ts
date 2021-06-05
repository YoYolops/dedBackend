const items = require('../../data/items.json');
import { Request, Response } from 'express';
import { Item } from '../types';

class ItemManager {
    searchItem(req: Request, res: Response) {
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
}

export default new ItemManager
