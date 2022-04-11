import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent   {
 
  heroes: string [] = ['Spiderman','Ironman', 'Hulk','Thor','Capitan Americas'];
  heroeBorrado: string = '';

  heroesBorrados: string[] = [];

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

  

}
