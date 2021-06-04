import mongoose from 'mongoose'

/* modificadores, perícias, capacidade de carregar peso */

const PlayerDataSchema = new mongoose.Schema({
    characterName: String,
    password: String,
    characterData: {
        characterAttributes: {
            forca: Number,
            destreza: Number,
            constituicao: Number,
            inteligencia: Number,
            sabedoria: Number,
            carisma: Number
        },
        raca: String, /* Raça */
        classe: String,
    },
    possessions: {
        itemIds: Array,
        spellIds: Array,
        gold: Number
    }
})

export default mongoose.model('PlayerDataSchema')