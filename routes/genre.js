import express from 'express'
import { getgenre, getgenre, addgenre, updategenre, deletegenre } from '../controllers/Ingredients.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergreParams: true})

router.get('/', verifyToken, getgenre)
router.get('/:id', verifyToken, getgenre)
router.post('/', verifyToken, addgenre)
router.put('/:id', verifyToken, updategenre)
router.delete('/id:', verifyToken, deletegenre)

export default router