import Details from "../models/detailsModel.js"

export const getDetailsFromUser = async (req, res) => {
    try {
        const { username, email, phoneNumber, placesToVisit, numberOfAdults, numberOfChildren } = req.body

        const existingUser = await Details.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                success: false,
                // message: "Error in submitting data",
                error: "Email already exists."
            })
        }
        const details = await Details.create({ username, email, phoneNumber, placesToVisit, numberOfAdults, numberOfChildren })


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