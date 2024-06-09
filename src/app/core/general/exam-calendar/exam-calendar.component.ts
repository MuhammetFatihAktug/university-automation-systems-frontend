import {Component} from '@angular/core';
import {Exam} from "../../../shared/models/exam";
import {formatDate, NgForOf} from "@angular/common";

@Component({
  selector: 'app-exam-calendar',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './exam-calendar.component.html',
  styleUrl: './exam-calendar.component.css'
})
export class ExamCalendarComponent {
  exams: Exam[];

  ngOnInit() {
    this.exams = [
      {
        name: "Veri Analizine Giriş (Teknik Seçmeli Ders VIII)",
        examType: "odev",
        date: "17.05.2024 11:00",
        location: "Belli Degil",
        including: true,
        code: "131718753"
      },
      {
        name: "İstatistik Okuryazarlık (Sosyal Seçmeli Ders II)",
        examType: "Ara Sınav Mazeret",
        date: "17.05.2024 11:00",
        location: "Belli Degil",
        including: false,
        code: "131714514"
      },
      {
        name: "Mühendislik Ekonomisi",
        examType: "Ara Sınav",
        date: "17.04.2024 09:00",
        location: "Belli Degil",
        including: true,
        code: "131718127"
      },
      {
        name: "Mobil Sistem Programlama Projesi",
        examType: "Ara Sinav",
        date: "17.04.2024 09:00",
        location: "Belli Degil",
        including: true,
        code: "131718958"
      }

    ];
  }

  protected readonly formatDate = formatDate;
}
