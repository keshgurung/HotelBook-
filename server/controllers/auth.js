// import User from '../models/user.js'
// import jwt from 'jsonwebtoken'
// import { secret } from '../config/environment.js'

export const registerUser = async (req, res) => {
  try {
    console.log(req.body)
    // const newUser = await User.create(req.body)
    // return res.status(202).json({ message: `Welcome ${newUser.username}` })
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}
