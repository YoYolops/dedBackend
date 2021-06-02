import mongoose from 'mongoose'

/* modificadores, perícias, capacidade de carregar peso */

const PlayerDataSchema = new mongoose.Schema({
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
})

export default mongoose.model('PlayerDataSchema')