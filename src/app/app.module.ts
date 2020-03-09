import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GalgelegComponent } from './galgeleg/galgeleg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalgelegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
