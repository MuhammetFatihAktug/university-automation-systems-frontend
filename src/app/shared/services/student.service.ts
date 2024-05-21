import {Injectable} from '@angular/core';
import {Student} from "../models/student";
import {AxiosService} from "./axios.service";
import {StudentCourse} from "../models/studentCourse";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student: Student;
  studentCourse: StudentCourse[];
  private _studentNumber: number;


  constructor(private axiosService: AxiosService) {
  }

  async getStudent(): Promise<any> {
    const params = {studentNumber: 201913171046};
    try {
      let response = await this.axiosService.request("GET", "user/info", params);
      this.student = response.data;
      return this.student;
    } catch (error) {
      console.error("Error fetching student data:", error);
      throw error;
    }
  }

  async getStudentCourse(): Promise<any> {
    const params = {studentNumber: 201913171046};
    try {
      let response = await this.axiosService.request("GET", "user/courses", params);
      this.studentCourse = response.data;
      return this.studentCourse;
    } catch (error) {
      console.error("Error fetching student data:", error);
      throw error;
    }
  }

  get studentNumber(): number {
    return this._studentNumber;
  }

  set studentNumber(value: number) {
    this._studentNumber = value;
  }

}
