import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
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

//Handle Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not Found',
      },
    ],
  });
  next();
});

export default app;
