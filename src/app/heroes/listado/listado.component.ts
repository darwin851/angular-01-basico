import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitan America', 'Scarlet'];
  heroesBorrados: string[] = [];


  borrarHeroe( NameHeroe: string ) {
    console.log('Eliminando a: '+ NameHeroe);  
    this.heroesBorrados.unshift(NameHeroe);
    this.heroes = this.heroes.filter(item => item !== NameHeroe);
  }

}
