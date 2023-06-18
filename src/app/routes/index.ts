import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes.router,
  },
  {
    path: '/academic-Semesters',
    route: AcademicSemesterRoutes.router,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

//Application routes
// router.use('/users/', UserRoutes.router);
// router.use('/academic-semesters/', AcademicSemesterRoutes.router);

export default router;
