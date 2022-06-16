import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import { ListadoComponent } from '../heroes/listado/listado.component';


@NgModule({
    declarations: [

        ContadorComponent

    ],

    exports: [
        ContadorComponent
    ],

    imports: [

        CommonModule
    ]
})

export class ContadorModule {


}