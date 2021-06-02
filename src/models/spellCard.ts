import mongoose from 'mongoose';

const SpellCardSchema = new mongoose.Schema({
    id: Number,
    name: String,
    rarity: String,
    imageUrl: String,
    description: String,
    atk: String,
    def: String,
    weight: Number,
    type: String
})

export default mongoose.model('SpellCard', SpellCardSchema)