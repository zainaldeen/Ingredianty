import {Component, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';

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

  addServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.onServerCreated.emit({
      type: 'server',
      name: serverName.value,
      content: serverContent.value
    });
  }

  addBlueprint(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.onBlueprintCreated.emit({
      type: 'blueprint',
      name: serverName.value,
      content: serverContent.value
    });
  }

}
