import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

// Services
import { MapasService } from "./services/mapas.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
        apiKey:'AIzaSyBYG0jxt2lAjt6YJXRpLzvuB8Q5AnzNneI'
    })
  ],
  providers: [
      MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
