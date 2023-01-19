import cast_character from "../models/cast_character.js"

export const getcast_character = async (req, res) => {
    try {
        const cast_character = await cast_character.find()
        if (cast_character.length !== 0)
            res.status(200).json(cast_character)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getCast_character = async (req, res) => {
    try {
        const { id } = req.params
        const cast_character = await cast_character.findById(id)
        if (cast_character)
            res.status(200).json(cast_character)
        else
            res.status(404).json({ error: 'resource not found' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addcast_character = async (req, res) => {
    try {
        const { code, fullName, yearsActive } = req.body
        const newcast_character = await cast_character.create({
            code,
            fullName,
            yearsActive
        })
        const savedcast_character = await newcast_character.save()
        res.status(201).json({ id: savedcast_character.id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deletecast_character = async (req, res) => {
    try {
        await cast_character.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}

export const updatecast_character = async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const { code, fullName, yearsActive } = req.body
        const update = {
            code: code,
            fullName: fullName,
            yearsActive: yearsActive
        }

        await cast_character.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}