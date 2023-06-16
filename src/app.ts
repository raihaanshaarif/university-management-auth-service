import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'
// import ApiError from './errors/ApiError'

const app: Application = express()
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', UserRoutes.router)

// Testing routes
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  Promise.reject(new Error('Unhandled promise Rejection'))
})

//Global Error Handler
app.use(globalErrorHandler)

export default app
