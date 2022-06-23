import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input() personajes:Personaje[] = [];
   
  
  @Input() nuevo:Personaje ={

    nombre: '',
    poder : 0

     }
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
 
  agregar(){
    if(this.nuevo.nombre.trim().length == 0 ){
      return;
    };
    this.onNuevoPersonaje.emit(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0

    }
}
}