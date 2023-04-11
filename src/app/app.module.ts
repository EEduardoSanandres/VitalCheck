import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { BeneficioComponent } from './beneficio/beneficio.component';
import { PreciosComponent } from './precios/precios.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    DescripcionComponent,
    BeneficioComponent,
    PreciosComponent,
    PiepaginaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
