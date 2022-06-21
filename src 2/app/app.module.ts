import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SetupComponent } from './setup/setup.component';
import { DirectivesComponent } from './directives/directives.component';
import { JsonComponent } from './json/json.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SetupComponent,
    DirectivesComponent,
    JsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
