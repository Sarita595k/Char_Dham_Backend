import mongoose, { Schema } from 'mongoose'

const detailsSchema = new Schema({
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
    },
    placesToVisit: {
        type: String
    },
    numberOfAdults: {
        type: Number,
        min: [1, 'At least one adult is required']

    }, numberOfChildren: {
        type: Number
    }
}
    , {
        timestamps: true
    })

const Details = mongoose.model("Details", detailsSchema)
export default Details