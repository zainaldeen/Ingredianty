import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number = 0;
  isShown: boolean = false;
  logs: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.logs.push(`Toggled display to ${this.id++}`);
    console.log(this.logs);
    this.isShown = !this.isShown;
  }

}
