import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import { connectToDb } from "./src/config/config.js";
import router from "./src/routes/detailsRoutes.js";
dotenv.config()

const app = express()
//connect backend to frontend

const allowedOrigins = [
    'https://yugenindiatravel.com',
    'http://localhost:5173'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

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