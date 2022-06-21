import { Component, OnInit } from '@angular/core';
import {Header, Schedule} from '../interfaceJSON';
import jsonData from '../../assets/data/reviewJSON.json';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  headerInfo: Header = jsonData.header;
  schedule: Schedule[] = jsonData.schedule;

  output!: string;

  displayJSON() {
    this.output = 
    `
    <h3>${this.headerInfo.system} for ${this.headerInfo.myName}</h3>
    `;

    for (let x of this.schedule) {
      this.output += 
        `
        <p>Route: ${x.route} / Leaves: ${x.leave} / Arrives: ${x.arrive}</p>
        `;

    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
