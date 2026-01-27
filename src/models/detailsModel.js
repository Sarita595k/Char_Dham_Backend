import mongoose, { Schema } from 'mongoose'

const detailsSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    placesToVisit: {
        type: String,
        required: true
    },
    numberOfAdults: {
        type: Number,
        required: true,
        min: [1, 'At least one adult is required']

    }, numberOfChildren: {
        type: Number,
        required: true
    }
}
    , {
        timestamps: true
    })

const Details = mongoose.model("Details", detailsSchema)
export default Details