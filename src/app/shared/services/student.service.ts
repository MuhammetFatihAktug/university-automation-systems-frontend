import {Injectable} from '@angular/core';
import {Student} from "../models/student";
import {AxiosService} from "./axios.service";
import {StudentCourse} from "../models/studentCourse";
import {CourseAbsence} from "../models/courseAbsence";
import * as string_decoder from "string_decoder";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private axiosService: AxiosService, private authService: AuthService) {
  }

  async getStudent(): Promise<any> {
    try {
      const response = await this.axiosService.request("GET", "/user/info", null, true);
      return response.data;
    } catch (error) {
      console.error("Error fetching student data:", error);
      throw error;
    }
  }

  async getStudentCourse(): Promise<any> {
    try {
      const response = await this.axiosService.request("GET", `/user/courses`, null, true);
      return response.data;
    } catch (error) {
      console.error("Error fetching student course data:", error);
      throw error;
    }
  }

  async getAllCourseAbsence(): Promise<any> {
    try {
      const response = await this.axiosService.request("GET", `/user/absences`, null, true);
      return response.data;
    } catch (error) {
      console.error("Error fetching course absence:", error);
      throw error;
    }
  }
}
