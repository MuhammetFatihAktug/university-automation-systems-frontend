import {Student} from "./student";
import {Course} from "./course";

export interface StudentCourse {
  student: Student;
  course: Course;
  midterm: number;
  finalExam: number;
  makeup: number;
  average: number;
  letterGrade: string;
  status: string;
}
