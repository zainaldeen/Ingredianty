import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isAddingAvailable: boolean = true;
  message : string = "No Server has added yet";
  buttonMessage: string = "Add Server";
  typedServer: string = "";
  flage = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  addNewServer() {
    if (!this.flage) {
      this.message = "Server has been added";
      this.buttonMessage = "Remove Server";
    }else {
      this.message = "No Server has added yet";
      this.buttonMessage = "Add Server";
    }
    this.flage = !this.flage;
  }
  addTypedServer(event: Event) {
    this.typedServer = (<HTMLInputElement>event.target).value;
  }
}
