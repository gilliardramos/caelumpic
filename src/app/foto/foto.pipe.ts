import { Pipe, PipeTransform } from '@angular/core'

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
    name: 'FiltroPorTitulo'

})
export class FiltroPorTitulo implements PipeTransform {

    // tslint:disable-next-line:one-line
    transform(titulo){
        return titulo
    }

}
