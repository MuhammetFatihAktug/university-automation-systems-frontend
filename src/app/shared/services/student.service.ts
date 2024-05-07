import {Injectable} from '@angular/core';
import {Student} from "../models/student";
import {AxiosService} from "./axios.service";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student: Student;

  constructor(private axiosService: AxiosService) {
  }

  getStudent() {
    this.student = {
      studentNumber: "201913171074",
      name: 'John',
      lastName: 'Doe'
    };
    return this.student;
  }
}
