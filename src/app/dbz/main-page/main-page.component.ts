import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre:String;
  poder : number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    }

  ];

  nuevo:Personaje ={

    nombre: '',
    poder : 0

  }

  agregar(){
    if(this.nuevo.nombre.trim().length == 0 ||this.nuevo.poder.valueOf.length == 0){
      return;
    };

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0

    }
  


      
   

  }

}
