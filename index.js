import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import { connectToDb } from "./src/config/config.js";
import router from "./src/routes/detailsRoutes.js";
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    })
    console.log("hello server")
})

app.use("/api/user", router)

app.listen(process.env.PORT, () => {
    connectToDb()
    console.log("Server is running")
})