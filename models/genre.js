import mongoose from 'mongoose'
import { cast_characterSchema } from './genre.js'

const genreSchema = new mongoose.Schema (
    {
        code: { type: String, required: true, unique: true },
        MovieName: { type: String, required: true },
        timeofreleased: { type: Number, required: true },
        date: { type: Number, required: true },
        DirectorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Director',
            required: true
        },
        cast_character: [cast_characterSchema]
    },
    { timestamps: true }
)

const genre = mongoose.model('genre', MovieSchema)
export default genre