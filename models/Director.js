import mongoose from 'mongoose'

const DirectorSchema = new mongoose.Schema (
    {
        code: { type: String, required: true, unique: true },
        fullName: { type: String, required: true },
        yearsActive: { type: Number, required: true }
    },
    { timestamps: true }
)

const Director = mongoose.model ('Director', DirectorSchema)
export default Director