import mongoose from 'mongoose'

/* modificadores, perícias, capacidade de carregar peso */

const CharacterSchema = new mongoose.Schema({
    characterName: String,
    password: String,
    characterData: {
        attributes: {
            forca: Number,
            destreza: Number,
            constituicao: Number,
            inteligencia: Number,
            sabedoria: Number,
            carisma: Number
        },
        race: String, /* Raça */
        class: String,
    },
    possessions: {
        itemIds: Array,
        spellIds: Array,
        gold: Number
    }
})

export default mongoose.model('Character', CharacterSchema)