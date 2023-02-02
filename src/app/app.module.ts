import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeerageGeneratorComponent } from './components/peerage-generator/peerage-generator.component';
import {MatCardModule} from "@angular/material/card";
import { OptionsComponent } from './components/options/options.component';
@NgModule({
  declarations: [
    AppComponent,
    PeerageGeneratorComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
