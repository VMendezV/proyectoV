import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './paginas/productos/productos.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { SabermasComponent } from './paginas/sabermas/sabermas.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { AppComponent } from './app.component';

//creando sistema de rutas
const routes: Routes=[
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'quienes-somos',
    component:QuienessomosComponent
  },
  {
    path:'sabermas',
    component:SabermasComponent
  },
  {
    path:'contactanos',
    component:ContactanosComponent
  },
  {
    path:'post',
    loadChildren: () => import('./paginas/post/post.module').then(m=>m.PostModule)
  },
  {
    path:'++',
    component:AppComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRutasModule { }
