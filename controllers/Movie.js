import Movie from '../models/Movie.js'
import Director from '../models/Movie.js'

export const getMovie = async (req, res) => {
    try {
        const Movie = await Movie
           .find({ DirectorId: req.params.DirectorId })
           .populate('DirectorId')
           .select('code DirectorName numberofyearsactive DirectorId')
        if (Movie.length !== 0)
            res.status(200).json(Movie)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getmovie = async (req, res) => {
    try {
        const { id } = req.params
        const Movie = await Movie.findById(id)
            .populate('DirectorId')
            .select('code DirectorName numberofyearsactive DirectorId')
        if (Movie)
            res.status(200).json(Movie)
        else (Movie)
            res.status(404).json({ error: 'resource not found '})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addMovie = async (req, res) => {
    try {
        const { code, MovieName, numberOfMovie, specialty } = req.body
        const DirectorId = req.params.chefId
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

export const deleteMovie = async (req, res) => {
    try {
        await Movie.deleteOne({
            DirectorId: req.params.DirectorId,
            _id: req.params.id
        })
        res.status(204).send()
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const updateMovie = async (req, res) => {
    try {
        const filter = {
            DirectorId: req.params.DirectorId,
            _id: req.params.id
        }
        const { version, year } = req.body
        const update = {
            code: code,
            MovieName: MovieName,
            numberOfMovie: numberOfMovie,
            expiration: expiration,
        }
        await Movie.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}