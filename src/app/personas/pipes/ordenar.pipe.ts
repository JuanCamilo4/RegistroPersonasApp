import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  dataSource: Persona[] = [];

  arrayHombres: Persona[] = [];
  arrayMujeres: Persona[] = [];

  transform(valor: Persona[], ordenarBy: string = 'nada'): Persona[] {

    this.arrayHombres = [];
    this.arrayMujeres = [];

    if (ordenarBy == 'nada') {
      return valor;
    } else {
      valor.forEach(e =>{
        if (e.sexo == 'Masculino') this.arrayHombres.push(e);
        else this.arrayMujeres.push(e);
      });

      if (ordenarBy == 'M') {
        return this.arrayHombres.concat(this.arrayMujeres);
      } else {
        return this.arrayMujeres.concat(this.arrayHombres);
      }
    }
  }

}
