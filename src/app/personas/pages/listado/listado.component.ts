import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  count: number = 1;
  cambiarOrdenPipe: string = 'nada';

  personasArray: Persona[] = []; //Arreglo con los datos de la tabla
  displayedColumns: string[] = ['nombre', 'fecha_nacimiento', 'sexo'];
  dataSource: Persona[] = [];

  constructor(private personaService: PersonasService) {
    this.getPersonas();
  }

  ngOnInit(): void {}

  cambiarOrden() {
    if (this.count == 1) {
      this.cambiarOrdenPipe = 'M';
      this.count++;
    } else if(this.count == 2) {
      this.cambiarOrdenPipe = 'F';
      this.count++;
    } else if(this.count == 3) {
      this.cambiarOrdenPipe = 'nada';
      this.count = 1;
    }
    
  }

  getPersonas() {
    this.personaService.getPersonas()
      .subscribe(persona => {
        this.personasArray = persona;
        this.dataSource = this.personasArray;
      })
  }

}
