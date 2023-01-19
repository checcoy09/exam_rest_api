import Movie from '../models/Movie.js'
import genre from '../models/genre.js'

export const getgenre = async (req, res) => {
    try {
        const genre = await genre
           .find({ MovieId: req.params.MovieId })
           .populate('MovieId')
           .select('code MovieName dateofreleased MovieId')
        if (genre.length !== 0)
            res.status(200).json(Movie)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getMovie = async (req, res) => {
    try {
        const { id } = req.params
        const Movie = await Movie.findById(id)
            .populate('DirectorId')
            .select('code DirectorName numberofyearsactive DirectorId')
        if (movie)
            res.status(200).json(Movie)
        else (Movie)
            res.status(404).json({ error: 'resource not found '})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addgenre = async (req, res) => {
    try {
        const { code, MovieName, numberOfMovie, specialty } = req.body
        const DirectorId = req.params.DirectorId
        const newMovie = await Movie.create({
            code,
            MovieName,
            numberOfMovie,
            specialty,
            DirectorId
        })
        const savedMovie = await newMovie.save()
        res.status(201).json({ id: savedDirector._id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deletegenre = async (req, res) => {
    try {
        await genre.deleteOne({
            MovieId: req.params.MovieId,
            _id: req.params.id
        })
        res.status(204).send()
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const updategenre = async (req, res) => {
    try {
        const filter = {
            MovieId: req.params.MovieId,
            _id: req.params.id
        }
        const { version, year } = req.body
        const update = {
            code: code,
            MovieName: MovieName,
            numberOfMovie: numberOfMovie,
            expiration: expiration,
        }
        await Food.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}