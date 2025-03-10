//imports
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton]
})
export class LeinsterPage implements OnInit {

  //constructor takes in router 
  constructor(private router: Router) {
   }

   //this method is called when the button is clicked
  onButtonClicked()
  {
    //displays a message to the console
    console.log("Button Clicked");
    //navigates to the leinster-counties page
        this.router.navigate(['/leinster-counties']);

  }

  ngOnInit() {
  }

}
