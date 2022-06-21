import { Component, OnInit, Input } from '@angular/core';
import { CadgeranBio } from '../cadgeranBio';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  @Input() bio!: CadgeranBio;

  cround() {
    document.getElementById("me")!.style.borderRadius = "50px";
    document.getElementById("me")!.style.border = "thick solid crimson";
  }

  psquare() {
    document.getElementById("me")!.style.borderRadius = "0px";
    document.getElementById("me")!.style.border = "thick dashed purple";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
