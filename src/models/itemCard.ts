import mongoose from 'mongoose'

const ItemCardSchema = new mongoose.Schema({
    id: Number,
    name: String,
    level: String,
    type: String,
    conjurationTime: String,
    range: Number,
    duration: String,
    description: String
})

export default mongoose.model('ItemCard', ItemCardSchema)