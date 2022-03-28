import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  @Output() onServerCreated = new EventEmitter<{type: string, name: string, content: string}>();
  @Output() onBlueprintCreated = new EventEmitter<{type:string, name: string, content: string}>();

  serverName: string = '';
  serverContent: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addServer() {
    this.onServerCreated.emit({
      type: 'server',
      name: this.serverName,
      content: this.serverContent
    });
  }

  addBlueprint() {
    this.onBlueprintCreated.emit({
      type: 'blueprint',
      name: this.serverName,
      content: this.serverContent
    });
  }

}
