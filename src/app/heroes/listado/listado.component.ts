import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    heroes : string[] = ['Spiderman','IronMan','Hulk','Thor','Capitan america'];
  heroeB: string= '';
    

    borrarHeroe():void{
      
      const heroeBorrado =this.heroes.shift()|| '';
      console.log(heroeBorrado);
      this.heroeB= heroeBorrado;
    }

  }
