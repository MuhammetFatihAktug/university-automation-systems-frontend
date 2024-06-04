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

  async getStudentGpa(): Promise<any> {
    try {
      const response = await this.axiosService.request("GET", `/user/gpa`, null, true);
      return response.data;
    } catch (error) {
      console.error("Error fetching student gpa data:", error);
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

  async getGroupedStudentCourses(): Promise<{ [key: string]: StudentCourse[] }> {
    try {
      const studentCourses = await this.getStudentCourse();
      return this.groupCoursesByDate(studentCourses);
    } catch (error) {
      console.error("Error fetching grouped student courses:", error);
      throw error;
    }
  }

  private groupCoursesByDate(studentCourses: StudentCourse[]): { [key: string]: StudentCourse[] } {
    const groupedCourses: { [key: string]: StudentCourse[] } = {};
    studentCourses.forEach(course => {
      const date: string = course.createdDate;
      if (!groupedCourses[date]) {
        groupedCourses[date] = [];
      }
      groupedCourses[date].push(course);
    });
    return groupedCourses;
  }

}
