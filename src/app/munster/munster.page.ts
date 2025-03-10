import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';
//imports IonBackButton and IonButtons from the standalone class, which allows us to display back buttons and styled buttons on the screen

@Component({
  selector: 'app-munster',
  templateUrl: './munster.page.html',
  styleUrls: ['./munster.page.scss'],
  standalone: true,
  //adding the IonButtons and IonBackButton to the imports
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons]
})
export class MunsterPage implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
