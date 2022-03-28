import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  @Output() onServerCreated = new EventEmitter<{type: string, name: string, content: string}>();
  @Output() onBlueprintCreated = new EventEmitter<{type:string, name: string, content: string}>();
  @ViewChild('serverName') serverName:ElementRef = {nativeElement: {value: ''}};
  @ViewChild('serverContent') serverContent:ElementRef = {  nativeElement: {value: ''}};
  // serverName: string = '';
  // serverContent: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addServer() {
    this.onServerCreated.emit({
      type: 'server',
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value
    });
  }

  addBlueprint() {
    this.onBlueprintCreated.emit({
      type: 'blueprint',
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value
    });
  }

}
