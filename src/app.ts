import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
// import usersService from './app/modules/user/users.service'
import usersRouter from './app/modules/user/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', usersRouter)


// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Ore baba')
//   // next('Ore baba')
// })

//Global Error Handler
app.use(globalErrorHandler)

export default app
