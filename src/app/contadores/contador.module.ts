import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import { darwinComponent } from './contador/darwin.component';

@NgModule({
    declarations: [
        ContadorComponent,
        darwinComponent
    ],
    exports: [
        ContadorComponent,
        darwinComponent
    ],
    imports: [
        CommonModule

    ]
   
})

export class ContadorModule{

}