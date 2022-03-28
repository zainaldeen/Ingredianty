import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: {type:string, name:string, content:string}[] = [
    {type:'server', name:'Testserver', content:'Just a test!'},
    {type:'bluprint', name:'Testserver 2', content:'Just a test 2!'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewServer(server: {type:string, name:string, content:string}) {
    this.servers.push({
      type: server.type,
      name: server.name,
      content: server.content
    });
  }
  addNewBlueprint(blueprint: {type:string, name:string, content:string}) {
    this.servers.push({
      type: blueprint.type,
      name: blueprint.name,
      content: blueprint.content
    });
  }
}
