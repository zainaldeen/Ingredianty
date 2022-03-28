import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css']
})
export class ServersListComponent implements OnInit {

  @Input() server: {type:string, name: string, content: string} = {type: '', name: '', content: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
