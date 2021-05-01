import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelesService} from './services/hoteles.service';
import { ListComponent } from './components/list/list.component';
import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HotelComponent } from './components/hotel/hotel.component';
import { CalificacionComponent } from './components/calificacion/calificacion.component';
import { FotoComponent } from './components/foto/foto.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavComponent,
    FormComponent,
    HotelComponent,
    CalificacionComponent,
    FotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [
    HotelesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
