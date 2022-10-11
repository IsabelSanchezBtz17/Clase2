import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondModule } from './modules/second/second.module';
import { FirstModule } from './modules/first/first.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    SecondModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
