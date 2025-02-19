import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import { middlewareAuth } from "./middlewares/auth.js"
import usersRouter from "./routes/users.js"
import authRouter from "./routes/auth.js"

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    console.log("log home")
    res.send("Welcome home!")
})

app.use('/users', middlewareAuth, usersRouter)
app.use('/admin', authRouter)

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on port: ${PORT}`)
        })
    })
    .catch(error => console.error(error))