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

  servers: string[] = ['Testserver', 'Testserver 2'];
  constructor() {
  }

  ngOnInit(): void {
  }

  addNewServer() {
    if (!this.flage) {
      this.servers.push(this.typedServer);
      this.message = "Server has been added";
      this.buttonMessage = "Remove Server";
    }else {
      this.servers.pop();
      this.message = "No Server has added yet";
      this.buttonMessage = "Add Server";
    }
    this.flage = !this.flage;
  }
  addTypedServer(event: Event) {
    this.typedServer = (<HTMLInputElement>event.target).value;
  }
}
