import { Pipe, PipeTransform } from '@angular/core'
import { FotoComponent } from './foto.component';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
    name: 'FiltroPorTitulo'

})
export class FiltroPorTitulo implements PipeTransform {

    // tslint:disable-next-line:one-line
    transform(fotos: FotoComponent[], digitado: string): FotoComponent[]{
        console.log(fotos)
        
         digitado = digitado.toLowerCase()
         return fotos.filter(foto =>{
             // foto.titulo = foto.titulo === undefined ? '' : foto.titulo
        return foto.titulo.toLowerCase().includes(digitado)});

            }

}
