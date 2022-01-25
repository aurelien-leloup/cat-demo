import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {CatBreedsComponent} from './cat-breeds/cat-breeds.component';
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {InMemoryCatService} from "./mock/in-memory-cat-service";


@NgModule({
  declarations: [
    AppComponent,
    CatBreedsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    environment.production ?
      [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryCatService, {
        delay: 2000
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
