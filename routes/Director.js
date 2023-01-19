import express from 'express'
import { getDirector, getDirector, addDirector, updateDirector, deleteDirector } from '../controllers/chef.js' 
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get('/', verifyToken, getDirector)
router.get('/:id', verifyToken, getDirector)
router.post('/', verifyToken, addDirector)
router.put('/:id', verifyToken, updateDirector)
router.delete('/:id', verifyToken, deleteDirector)

export default router
