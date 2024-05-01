import {Component} from '@angular/core';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.css'
})
export class AnnouncementsComponent {

  announcements = [
    {id: 1, title: 'Özbekistan’dan Bahar Nefesi Çalıştayı Sona Erdi', content: 'Prof. Dr. Süleyman Kızıltoprak, DPÜ Müzeler Koordinatörlüğü ve BUÜ Ali Şir Nevai Özbek Dili ve Kültürü Merkezinin iş birliğiyle düzenlenen Özbekistan’dan Bahar Nefesi Çalıştayı’nın kapanış töreninde kültürler arası iş birliğinin önemine vurgu yaparak katılımcılara teşekkür etti.',date:'29 Nisan 2024, Pazartesi',images:'http://medya.dpu.edu.tr/files/2024/04/29/662fad3d37932/81d7b1e317dc3b711b60082074a24ef1_.jpeg'},
    {id: 2, title: 'DPÜ Uluslararası Kalite Güvencesi ve Akreditasyon Konferansı’na Katıldı', content: 'Kütahya Dumlupınar Üniversitesi Rektörü Prof. Dr. Süleyman Kızıltoprak ve beraberindeki heyet, Yükseköğretim Kalite Kurulu (YÖKAK) tarafından, Ankara Hacı Bayram Veli Üniversitesi ev sahipliğinde düzenlenen Uluslararası Kalite Güvencesi ve Akreditasyon Konferansı’na katıldı.',date:'29 Nisan 2024, Pazartesi',images:'https://medya.dpu.edu.tr/files/2024/04/29/662f501a9a89e/bd78629858c8dd281d5f2261efc0d0f3_.jpeg'},
    {id: 3, title: 'DPÜ KSBMYO’da Objektiften Üniversitem Sergisi', content: 'DPÜ Kütahya Sosyal Bilimler Meslek Yüksekokulunda (KSBMYO) Objektiften Üniversitem başlıklı fotoğraf sergisinin açılış töreni düzenlendi.',date:'date1',images:'https://medya.dpu.edu.tr/files/2024/04/26/662ba5401b2ab/a8dd9ddaa9c51d4dc943648aac1fc3c4_.jpeg'}
  ];

}
