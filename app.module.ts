import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditLogsComponent } from './audit-logs/audit-logs.component';
import { EntityChangesComponent } from './entity-changes/entity-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditLogsComponent,
    EntityChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
