import mongoose from 'mongoose'

const ContestantSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
},{timestamps: true})

export default mongoose.model("Contestant", ContestantSchema)