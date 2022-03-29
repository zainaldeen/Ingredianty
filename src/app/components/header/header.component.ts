import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UrlHandleService } from '../../shared/services/header/urlHandle.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  selectUrl: string = 'recipe';
  constructor(private urlHandleService: UrlHandleService) { }

  ngOnInit(): void {
    this.selectUrl = this.urlHandleService.url;
  }
  setUrl(url:string) {
    this.urlHandleService.setUrl(url);
  }
}
