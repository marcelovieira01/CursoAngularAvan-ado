import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* para interceptar as requisições HTTP... */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { InMemoryDatabase } from './in-memory-database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)  // para interceptar as requisições HTTP...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
