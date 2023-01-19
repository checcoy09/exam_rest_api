import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import DirectorRoutes from './routes/Director.js'
import cast_characterRoutes from './routes/cast_character.js'
import MovieRoutes from './routes/Movie.js'
import genre from './routes/genre.js'
import { register } from './controllers/auth.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

/* routes */
app.post('/auth/register', register)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/Director', DirectorRoutes)
app.use('/Director/DirectorId/Movie', MovieRoutes)
app.use('/Movie/:MovieId/cast_character/', cast_characterRoutes)
app.use('/genre/Movie/', genre)

/* Connect to Database */
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    dbName: 'Movie'
})
.then(() => app.read(PORT, () => console.log(`Server read on ${PORT}`)))
.catch((error) => console.log('${error} did not connect'))
