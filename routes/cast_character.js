import express from 'express'
import { getcast_character, getcast_character, addcast_character, updatecast_character, deletecast_character } from '../controllers/chef.js' 
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get('/', verifyToken, getcast_character)
router.get('/:id', verifyToken, getcast_character)
router.post('/', verifyToken, addcast_character)
router.put('/:id', verifyToken, updatecast_character)
router.delete('/:id', verifyToken, deletecast_character)

export default router
