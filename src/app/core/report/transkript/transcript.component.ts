import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../shared/services/student.service";
import {Student} from "../../../shared/models/student";

import {TDocumentDefinitions} from "pdfmake/interfaces";
import {StudentCourse} from "../../../shared/models/studentCourse";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common"

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {
  transcriptData: any;
  groupedTranscriptData: { [key: string]: StudentCourse[] };

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.loadTranscript();
  }

  async loadTranscript(): Promise<void> {
    try {
      const studentInfo: Student = await this.studentService.getStudent();
      const studentCourses = await this.studentService.getStudentCourse();
      const groupedCourses = this.studentService.groupCoursesByDateAndSemester(studentCourses);
      const prepStatus = "2019 - 2020 Eğitim Öğretim Yılı İngilizce Hazırlık Sınıfında Başarılı olmuştur.";

      this.transcriptData = {
        student: {
          name: studentInfo.firstName || '',
          id: studentInfo.studentNumber || '',
          tcNo: studentInfo.tc || '',
          enrollmentDate: studentInfo.registrationDate || '',
          enrollmentReason: 'ÖSS',
          prepStatus: prepStatus,
        }
      };
      this.groupedTranscriptData = groupedCourses;
    } catch (error) {
      console.error('Error loading transcript data:', error);
    }
  }

  printTranscript(): void {
    const docDefinition: TDocumentDefinitions = {
      content: [
        {text: 'Öğrenci Bilgileri', style: 'subheader'},
        {text: `Adı Soyadı: ${this.transcriptData?.student?.name}`, style: 'subtext'},
        {text: `Öğrenci No: ${this.transcriptData?.student?.id}`, style: 'subtext'},
        {text: `T.C. Kimlik No: ${this.transcriptData?.student?.tcNo}`, style: 'subtext'},
        {text: `Kayıt Tarihi: ${this.transcriptData?.student?.enrollmentDate}`, style: 'subtext'},
        {text: `Kayıt Nedeni: ${this.transcriptData?.student?.enrollmentReason}`, style: 'subtext'},
        {text: `Hazırlık Durumu: ${this.transcriptData?.student?.prepStatus}`, style: 'subtext'},
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              ['Ders Kodu', 'Ders Adı', 'Kredi', 'Ortalama', 'Harf Notu'],
              ...this.constructTranscriptTableBody()
            ]
          }
        }
      ],
      styles: {
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5] // Boşluk ayarla
        },
        subtext: {
          fontSize: 12,
          margin: [0, 0, 0, 5] // Boşluk ayarla
        }
      }
    };

    pdfMake.createPdf(docDefinition).download('transcript.pdf');
  }


  constructTranscriptTableBody(): any[] {
    const tableBody = [];

    for (const semester of Object.keys(this.groupedTranscriptData)) {
      tableBody.push([{text: semester, colSpan: 5, bold: true, alignment: 'center'}, {}, {}, {}, {}]);
      const courses = this.groupedTranscriptData[semester];
      for (const course of courses) {
        tableBody.push([
          course.course.courseCode,
          course.course.name,
          course.course.credits,
          course.average,
          course.letterGrade
        ]);
      }
    }

    return tableBody;
  }
}
