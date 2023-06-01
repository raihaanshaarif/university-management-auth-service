import express, { Application, Request, Response } from 'express'
const app: Application = express();
import cors from 'cors';
import usersService from './modules/user/users.service';

app.use(cors());


// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: "998",
    password: "1234",
    role: "student"
  })
  res.send('Work Successfully')

})

export default app
