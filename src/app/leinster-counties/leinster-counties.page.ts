import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-leinster-counties',
  templateUrl: './leinster-counties.page.html',
  styleUrls: ['./leinster-counties.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons]
})
export class LeinsterCountiesPage implements OnInit {
  //array with counties in leinster
  counties: string[] = ["Carlow", "Dublin", "Kildare",
    "Kilkenny", "Laois", "Longford", "Louth", "Meath",
    "Offaly", "Westmeath", "Wexford", "Wicklow"];
    
  constructor() { }

  ngOnInit() {
  }

}
