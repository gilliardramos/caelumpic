import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-painel',
    templateUrl: './painel.component.html'
    styles: []})

export class PainelComponent {
    // tslint:disable-next-line:no-trailing-whitespace
    
   @Input() titulo: string;

   constructor() {

   }

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit() {

    // tslint:disable-next-line:prefer-const
    let tituloCortado = this.titulo

    if (tituloCortado.length > 7) {
        this.titulo = `${tituloCortado.substr(0, 6)} ...`
    }

   }
}
