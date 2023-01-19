import mongoose from 'mongoose'
import { cast_characterSchema } from './Movie.js'

const MovieSchema = new mongoose.Schema (
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
        menu: [casr_characterSchema]
    },
    { timestamps: true }
)

const Movie = mongoose.model('Movie', MovieSchema)
export default Movie