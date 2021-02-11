import { Component } from '@angular/core';

@Component({
    selector: 'app-darwin',
    template: `
    <h3>Darwin González</h3>
    <div *ngFor="let i of arrayTwo(20) ">
    <strong>{{ numeros +  i }}</strong>
    </div>
    `
})

export class darwinComponent {
    numeros: number = 0;

    arrayTwo(n: number): number[] {
        return [...Array(n).keys()];
      }

}