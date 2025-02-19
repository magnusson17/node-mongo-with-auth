import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    squadra: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)