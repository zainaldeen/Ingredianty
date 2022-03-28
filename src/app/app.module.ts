import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './components/servers/servers.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServersListComponent } from './components/servers/servers-list/servers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    EditServerComponent,
    ServersListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
