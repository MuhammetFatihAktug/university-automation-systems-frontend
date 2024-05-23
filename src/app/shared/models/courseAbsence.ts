import {StudentCourse} from "./studentCourse";

export interface CourseAbsence {
  studentCourse: StudentCourse,
  date: Date,
  absenceStatus: boolean
}
