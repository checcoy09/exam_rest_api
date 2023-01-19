import mongoose from 'mongoose'

const cast_characterSchema = new mongoose.Schema (
    {
        code: { type: String, required: true, unique: true },
        fullName: { type: String, required: true },
        yearsActive: { type: Number, required: true }
    },
    { timestamps: true }
)

const cast_character = mongoose.model ('cast_character', cast_characterSchema)
export default cast_character