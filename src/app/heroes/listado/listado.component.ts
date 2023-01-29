import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  
  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log('borrando...');
    this.heroeBorrado = this.heroes.pop() || '';

  }
}
