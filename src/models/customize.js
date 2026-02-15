import mongoose, { Schema } from 'mongoose'

const customizeSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please provide a valid email address"]
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^[6-9]\d{9}$/, 'Please provide a valid 10-digit Indian phone number']
    }
}
    , {
        timestamps: true
    })

const Customize = mongoose.model("Customize", customizeSchema)
export default Customize