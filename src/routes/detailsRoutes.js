import express from "express"
import { getDetailsFromUser } from "../controllers/detailsController.js"
import { getCustomizeDetailsFromUser } from "../controllers/customize.js"

const router = express.Router()

router.post("/data", getDetailsFromUser)
router.post("/customizeData", getCustomizeDetailsFromUser)

export default router