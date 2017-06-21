import { Injectable } from '@angular/core';
import {Response, Http,  Headers} from '@angular/http';
import { FotoComponent } from './foto/foto.component';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Injectable()

export class AppService {
    http: Http
    fotos: FotoComponent[] = []
    foto= new FotoComponent();
    cabecalho = new Headers();

    url = 'http://localhost:3000/v1/fotos'

    constructor(http: Http) {
        this.http = http
        this.cabecalho.append('content-type', 'application/json');
    }

    listar(): Observable< FotoComponent[] > {
        return this.http.get(this.url)
        .map( response => response.json() )
    }

    cadastrar(foto: FotoComponent): any {

        // se a minha foto tem id, faço um PUT
        if(foto._id){
            return this.http.put(`${this.url}/${foto._id}`, foto, {headers: this.cabecalho})
        }
// se não post
        // tslint:disable-next-line:one-line
        else {
            return this.http.post(this.url, JSON.stringify(foto), {headers: this.cabecalho})
        }
}

    deletar(foto: FotoComponent): Observable<Response> {
        console.log(foto)
       return this.http.delete(`${this.url}/${foto._id}`)

    }

    // tslint:disable-next-line:one-line
    detalheFoto(id: string): Observable<FotoComponent>{
        return this.http.get(`${this.url}/${id}`).map( textoApi => textoApi.json()) // aqui eu transformei
       // em objeto JS

    }

    atualizar(foto: FotoComponent): Observable<Response> {
        return this.http.put(`${this.url}/${foto._id}`, JSON.stringify(foto), {headers: this.cabecalho})

    }

}
