import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.js'

const router = express.Router()

router.route('/users/register').post(registerUser)

router.route('/login').post(loginUser)

export default router
