import { AuthUser } from "../models/auth.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const {username, password} = req.body
    const hashedPass = await bcrypt.hash(password, 10)
    const user = new AuthUser({ username, password: hashedPass })

    try {
        await user.save()
        res.status(201).json("user registrated")
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const login = async (req, res) => {
    const {username, password} = req.body
    const user = await AuthUser.findOne({ username })

    if (!user) return res.status(401).json({message: "Invalid username or password"})
    
    if (bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET)
        return res.status(200).json({message: "logged in!", token})
    }

    res.status(401).json({message: "Invalid username or password"})
}