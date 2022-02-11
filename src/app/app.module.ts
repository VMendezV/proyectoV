import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SabermasComponent } from './paginas/sabermas/sabermas.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { AppRutasModule } from './app-rutas.module';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaginaModule } from './paginas/pagina.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    /*SabermasComponent,
    ContactanosComponent,
    QuienessomosComponent,
    ProductosComponent,*/
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModule,
    PaginaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
