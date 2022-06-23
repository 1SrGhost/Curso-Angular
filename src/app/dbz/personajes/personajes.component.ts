import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajes:any[] = [];
get personajes(){

  return this.dbzService.Personajes;

}

constructor(private dbzService:DbzService){}
  
}


