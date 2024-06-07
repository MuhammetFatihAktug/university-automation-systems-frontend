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

  public groupCoursesByDateAndSemester(studentCourses: StudentCourse[]): { [key: string]: StudentCourse[] } {
    const groupedCourses: { [key: string]: StudentCourse[] } = {};
    studentCourses.forEach(course => {
      const year = course.createdDate.split('-')[0];
      const semester = course.course.semester === 1 ? 'Güz' : 'Bahar';
      const key = `${year}-${parseInt(year) + 1} ${semester}`;

      if (!groupedCourses[key]) {
        groupedCourses[key] = [];
      }
      groupedCourses[key].push(course);
    });
    return groupedCourses;
  }
  async getGroupedCourseAbsence(): Promise<{ [key: string]: { [courseName: string]: { dates: string[], absenceStatus: boolean[] } } }> {
    try {
      const absences = await this.getAllCourseAbsence();
      return this.groupAbsencesByDateAndSemester(absences);
    } catch (error) {
      console.error("Error fetching grouped course absence:", error);
      throw error;
    }
  }

  private groupAbsencesByDateAndSemester(absences: CourseAbsence[]): { [key: string]: { [courseName: string]: { dates: string[], absenceStatus: boolean[] } } } {
    const groupedAbsences: { [key: string]: { [courseName: string]: { dates: string[], absenceStatus: boolean[] } } } = {};

    absences.forEach(absence => {
      const year = absence.studentCourse.createdDate.split('-')[0];
      const semester = absence.studentCourse.course.semester === 1 ? 'Güz' : 'Bahar';
      const key = `${year}-${parseInt(year) + 1} ${semester}`;
      const courseName = absence.studentCourse.course.name;

      if (!groupedAbsences[key]) {
        groupedAbsences[key] = {};
      }
      if (!groupedAbsences[key][courseName]) {
        groupedAbsences[key][courseName] = { dates: [], absenceStatus: [] };
      }

      groupedAbsences[key][courseName].dates.push(absence.date.toString());
      groupedAbsences[key][courseName].absenceStatus.push(absence.absenceStatus);
    });

    return groupedAbsences;
  }


}
