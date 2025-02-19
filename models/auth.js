import mongoose from "mongoose"

const authUserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const AuthUser = mongoose.model('AuthUser', authUserSchema)