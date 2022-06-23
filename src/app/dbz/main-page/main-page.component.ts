import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  

   nuevo: Personaje= {

     nombre: 'maestro karin ',
     poder: 15000,
   }

  
   constructor(private dbzService:DbzService){


   }  

}
