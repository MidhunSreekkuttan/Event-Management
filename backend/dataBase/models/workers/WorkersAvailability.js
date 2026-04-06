import mongoose from 'mongoose'

const AvailabilitySchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    selectedDate: { type: Date, required: true },
    availabilityFrom: { type: String, required: true },
    availabilityTo: { type: String, required: true },
    status: { type: String, required: true },
    quickSelect: { type: String },
    quickStatusActions: { type: String },
    date: { type: Date }

}, { timestamps: true })

const AvailabilityModel = mongoose.models.Availability || mongoose.model("Availability", AvailabilitySchema)

export default AvailabilityModel