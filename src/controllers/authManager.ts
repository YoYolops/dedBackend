import { Request, Response } from 'express';
import Character from '../models/character';

class AuthManager {
    async isCharacterNameRegistered(characterName: string) { 
        /* verifica se o nome de personagem já é registrado, retorna true em caso afirmativo e false em caso negativo */

        const characterAlreadyRegistered = await Character.findOne({characterName})
        return !!characterAlreadyRegistered 
    }

    async registerNewCharacter(req: Request, res: Response) {
        const character = req.body

        if(this.isCharacterNameRegistered(character.characterName)) {
            return res.json({
                status: 'Erro Benigno',
                message: 'Já existe um personagem com esse nome',
                error: null
            })
        } else {
            try {
                await Character.create({
                    characterName: character.characterName,
                    password: character.password,
                    characterData: character.characterData,
                    pessessions: character.possessions
                })
            } catch(e) {
                return res.json({
                    status: 'Erro Maligno',
                    message: 'Houve um erro na conexão com o banco de dados',
                    error: e
                })
            }
        }
    }

    async validateCharacterLogin(req: Request, res: Response) {
        const { characterName, password } = req.body

        const characterRegistered = await Character.findOne({
            $and: [{ characterName: characterName }, { password: password }]
        })

        return res.json(characterRegistered)
    }
}

export default new AuthManager