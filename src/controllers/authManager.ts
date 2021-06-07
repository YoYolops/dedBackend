import { Request, Response } from 'express';
import Character from '../models/character';

export async function isCharacterNameRegistered(characterName: string) { 
    /* verifica se o nome de personagem já é registrado, retorna true em caso afirmativo e false em caso negativo */
    const characterAlreadyRegistered = await Character.findOne({characterName})
    return !!characterAlreadyRegistered 
}

export async function registerNewCharacter(req: Request, res: Response) {
    const character = req.body

    if(await isCharacterNameRegistered(character.characterName)) {
        return res.json({
            status: 'Erro Benigno',
            message: 'Já existe um personagem com esse nome',
            error: null
        })
    } else {
        const createdCharacter = await Character.create({
            characterName: character.characterName,
            password: character.password,
            characterData: character.characterData,
            pessessions: character.possessions
        })
        return res.json(createdCharacter)
    }
}

export async function validateCharacterLogin(req: Request, res: Response) {
    const { characterName, password } = req.body

    const characterRegistered = await Character.findOne({
        $and: [{ characterName: characterName }, { password: password }]
    })
    return res.json(characterRegistered)
}
