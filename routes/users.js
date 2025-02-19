import express from "express"
import { getAllUsers, addUser, getUserById, deleteUser, updateUser } from "../controllers/users.js"

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', addUser)
router.get('/:id', getUserById)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router