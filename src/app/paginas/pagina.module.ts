import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { SabermasComponent } from './sabermas/sabermas.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    ProductosComponent,
    QuienessomosComponent,
    SabermasComponent,
    ContactanosComponent,
  ],
  exports:[
    ProductosComponent,
    QuienessomosComponent,
    SabermasComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginaModule { }
