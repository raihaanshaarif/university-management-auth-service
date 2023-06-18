import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  AcademicSemisterModel,
} from './academicSemester.interface';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

export const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: academicSemesterTitles },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: academicSemesterCodes },
    startMonth: { type: String, required: true, emun: academicSemesterMonths },
    endMonth: { type: String, required: true, emun: academicSemesterMonths },
  },
  {
    timestamps: true,
  }
);

//Handling same year and same semeister duplicate issue
//We can search database entry from above model using find
academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Semester is already exists!'
    );
  }
  next();
});

const AcademicSemester = model<IAcademicSemester, AcademicSemisterModel>(
  'AcademicSemister',
  academicSemesterSchema
);

export default AcademicSemester;
