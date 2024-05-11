import {Component} from '@angular/core';
import {Lesson} from "../../../shared/models/lesson";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-lessons-program',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './lessons-program.component.html',
  styleUrl: './lessons-program.component.css'
})
export class LessonsProgramComponent {

  lessons: Lesson[];
  days:string[] = ["Pazartesi",'Sali','Carsamba','Persembe','Cuma']

  ngOnInit() {

    this.lessons = [
      {
        day: 'Pazartesi',
        time: '08:00-12:00',
        name: 'Mobil Sistem Programlama Tasarımı',
        academician: 'Doç. Dr. GÜRCAN YAVUZ',
        location: '13-C-B312',
        code: 'MAT101'
      },

      {
        day: 'Sali',
        time: '08:00-12:00',
        name: 'Mobil Sistem Programlama Tasarımı',
        academician: 'Doç. Dr. GÜRCAN YAVUZ',
        location: '13-C-B312',
        code: 'MAT101'
      },
      {
        day: 'Sali',
        time: '13:00-13:00',
        name: 'Mobil Sistem Programlama Projesi',
        academician: 'Doç. Dr. GÜRCAN YAVUZ',
        location: '13-C-B312',
        code: 'MAT101'
      },
      {
        day: 'Sali',
        time: '14:00-16:50',
        name: 'Veri Analizine Giriş (Teknik Seçmeli Ders VIII)',
        academician: 'Doç. Dr. GÜRCAN YAVUZ',
        location: '13-C-206',
        code: 'MAT101'
      },

      {
        day: 'Carsamba',
        time: '08:00-11:50',
        name: 'Dağıtık Sistemler (Teknik Seçmeli Ders IV) (Uzaktan Öğretim)',
        academician: 'Dr. Öğr. Üyesi MUAMMER AKÇAY',
        location: '13-C-B311',
        code: 'MAT101'
      },
      {
        day: 'Carsamba',
        time: '15:00-16:50',
        name: 'Oyun Teorisi',
        academician: 'Dr. Öğr. Üyesi AYŞEGÜL YILDIZ',
        location: '11-İKT-D13',
        code: 'MAT101'
      },

      {
        day: 'Persembe',
        time: '14:00-16:50',
        name: 'Mühendislik Ekonomisi',
        academician: 'Dr. Öğr. Üyesi Yaşar Vitoşoğlu',
        location: '13-C-204',
        code: 'MAT101'
      },

      {
        day: 'Cuma',
        time: '09:00-11:50',
        name: 'İstatistik Okuryazarlık (Sosyal Seçmeli Ders II)',
        academician: 'Dr. Öğr. Üyesi ERSEL GÖZ',
        location: '13-C-204',
        code: 'MAT101'
      },

    ]

  }
}
