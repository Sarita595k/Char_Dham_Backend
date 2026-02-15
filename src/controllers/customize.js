import Customize from "../models/customize.js"

// created function for getting user data 
export const getCustomizeDetailsFromUser = async (req, res) => {
    try {
        const { username, email, phoneNumber } = req.body

        const existingUser = await Customize.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                success: false,
                // message: "Error in submitting data",
                error: "Email already exists."
            })
        }
        const details = await Customize.create({ username, email, phoneNumber })


        // check the status 
        res.status(201).json({
            success: true,
            // message: "Data Submitted Successfully",
            data: details
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            // message: "Error in submitting data",
            error: err.message
        })
    }
}