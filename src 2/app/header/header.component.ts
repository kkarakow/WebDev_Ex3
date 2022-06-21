import { Component, OnInit, Input } from '@angular/core';
import { CadgeranBio } from '../cadgeranBio';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() bio!: CadgeranBio;
  
  constructor() { }

  ngOnInit(): void {
  }

}
