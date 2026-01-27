import express from "express"
import { getDetailsFromUser } from "../controllers/detailsController.js"

const router = express.Router()

router.post("/data", getDetailsFromUser)

export default router