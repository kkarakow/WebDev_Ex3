import { BinaryOperator } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { CadgeranBio } from '../cadgeranBio';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  @Input() bio!: CadgeranBio;

  output!: string;
  cdate = new Date();

  idEntered!: string;

  checkdate() {
    let newdate = new Date();
    newdate.setDate(newdate.getDate() + 7);

    this.output = 
    `
    <strong>Final Exam Date: </strong>${newdate.toDateString()}
    `
  }

  constructor() { }

  ngOnInit(): void {
    this.idEntered = this.bio.cadgeranID;

    this.output = 
    `
    <strong>Current Date: </strong> ${this.cdate.toDateString() }
    `

    /* if you use "" + "" format - no marks */
  }

}
