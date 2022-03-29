import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onSelectUrl = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  setUrl(url:string) {
    this.onSelectUrl.emit(url);
  }
}
