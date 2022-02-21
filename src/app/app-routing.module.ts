import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './personas/pages/listado/listado.component';
import { AgregarComponent } from './personas/pages/agregar/agregar.component';
import { RouterModule } from '@angular/router';
import { BuscarComponent } from './personas/pages/buscar/buscar.component';

const route = [
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'agregar',
    component: AgregarComponent
  },
  {
    path: 'agregar/:id',
    component: AgregarComponent
  },
  {
    path: 'buscar',
    component: BuscarComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
