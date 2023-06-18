import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
// import ApiError from './errors/ApiError'

const app: Application = express();
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);
// //Application routes
// app.use('/api/v1/users/', UserRoutes.router);
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes.router);

// Testing routes
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled promise Rejection'));
// });

//Global Error Handler
app.use(globalErrorHandler);

export default app;
