import { Component } from '@angular/core';
import { CadgeranBio } from './cadgeranBio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thursdayReview';

  cadgeranInfo: CadgeranBio = {
    cadgeranName : "Ann C",
    cadgeranID : "123456"
  }
}
