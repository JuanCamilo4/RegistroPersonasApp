import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  nombre: string = '';
  fecha_nacimiento: string = '';
  sexo: string = '';
  generos: string[] = ['Masculino', 'Femenino'];

  constructor() { }

  ngOnInit(): void {
  }

}
