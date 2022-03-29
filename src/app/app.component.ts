import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUrl: string = 'recipe';
  selectUrl(url: string) {
    this.selectedUrl = url;
  }

}
