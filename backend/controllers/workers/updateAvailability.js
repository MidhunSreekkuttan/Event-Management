import AvailabilityModel from "../../dataBase/models/workers/WorkersAvailability.js";

export const updateAvailability = async (req, res) => {

    try {

        const userId = req.user.id

        const { selectedDate, availabilityFrom, availabilityTo, status, quickSelect, quickStatusActions } = req.body

        if (!selectedDate || !availabilityFrom || !availabilityTo || !status) {
            return res.json({ success: false, message: "missing Credentials" })
        }

        const available = new AvailabilityModel({
            userId,
            selectedDate,
            availabilityFrom,
            availabilityTo,
            status,
            quickSelect,
            quickStatusActions,
            date: Date.now()
        })
        await available.save()

        res.json({ success: true, message: "Update availabilty successful" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

export const listAvailability = async (req, res) => {

    try {

        const availabilityList = await AvailabilityModel.findOne({ userId: req.user.id })

        if (!availabilityList) {
            return res.json({ success: false, message: "User Not Found" })
        }

        res.json({ success: true, availabilityList })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}