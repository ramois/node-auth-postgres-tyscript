import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import authRoutes from './routes/authRoutes'
import usersRoutes from './routes/userRoutes'
const app = express()
app.use(express.json())
//Routes
app.use('/auth', authRoutes)
app.use('/user', usersRoutes)
//autenticacion
//user
console.log('esto esta siendo ejecutado')
export default app
