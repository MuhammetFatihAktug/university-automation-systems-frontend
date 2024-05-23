import {Student} from "./student";
import {Course} from "./course";

export interface StudentCourse {
  course: Course;
  midterm: number;
  finalExam: number;
  makeup: number;
  average: number;
  letterGrade: string;
  status: string;
}
