import express from 'express'
import { getMovie, getMovie, addMovie, updateMovie, deleteMovie } from '../controllers/Food.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergreParams: true})

router.get('/', verifyToken, getMovie)
router.get('/:id', verifyToken, getMovie)
router.post('/', verifyToken, addMovie)
router.put('/:id', verifyToken, updateMovie)
router.delete('/id:', verifyToken, deleteMovie)

export default router