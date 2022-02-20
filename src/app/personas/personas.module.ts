import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PersonasModule { }
