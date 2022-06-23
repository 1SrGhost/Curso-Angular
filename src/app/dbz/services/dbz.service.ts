import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()

export class DbzService{
    // se usa el guion bajo para indicar que es una propiedad privada como un estandar
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000,
        },
        {
          nombre: 'Vegeta',
          poder: 7500,
        }
    
      ]; 
    
    get Personajes():Personaje[]{

        return [...this._personajes];
    }

    constructor(){
        console.log('Servicio inicializado');
    }
}