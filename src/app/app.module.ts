import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PicksumElementComponent } from './picksum-element/picksum-element.component';

@NgModule({
  declarations: [
    AppComponent,
    PicksumElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
