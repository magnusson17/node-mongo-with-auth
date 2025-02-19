// import { v4 as uuidv4 } from "uuid"
import { User } from "../models/users.js"
import mongoose from "mongoose"

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const addUser = async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        // 201: created
        res.status(201).json(user)
    } catch (error) {
        // 409: conflict
        res.status(409).json({message: error.message})
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: "id non valido"})
    
    try {
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: "id non valido"})
    
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({message: "User deleted"})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: "id non valido"})
        
    const data = { ...req.body }

    try {
        const user = await User.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}