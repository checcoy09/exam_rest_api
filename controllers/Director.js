import Director from "../models/Chef.js"

export const getdirector = async (req, res) => {
    try {
        const Director = await Director.find()
        if (Director.length !== 0)
            res.status(200).json(Director)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getDirector = async (req, res) => {
    try {
        const { id } = req.params
        const Director = await Director.findById(id)
        if (Director)
            res.status(200).json(Director)
        else
            res.status(404).json({ error: 'resource not found' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addDirector = async (req, res) => {
    try {
        const { code, fullName, yearsActive } = req.body
        const newDirector = await Director.create({
            code,
            fullName,
            yearsActive
        })
        const savedDirector = await newDirector.save()
        res.status(201).json({ id: savedDirector.id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteDirector = async (req, res) => {
    try {
        await Director.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}

export const updateDirector = async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const { code, fullName, yearsActive } = req.body
        const update = {
            code: code,
            fullName: fullName,
            yearsActive: yearsActive
        }

        await Director.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}