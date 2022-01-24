import dotenv from 'dotenv'
dotenv.config()

export const dbURI = 'mongodb://127.0.0.1:27017/hotel'
// process.env.MONGODB_URI ||
export const port = process.env.PORT || 4000
export const secret = process.env.SECRET || 'shhhh its a secret'
