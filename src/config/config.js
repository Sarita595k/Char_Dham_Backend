import mongoose from "mongoose"

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected successfully")
    } catch (error) {
        console.log("error in connecting db", error)
    }
}