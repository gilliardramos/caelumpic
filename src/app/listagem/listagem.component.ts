import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http } from '@angular/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

    title = 'Caelumpic';
  fotos: FotoComponent [ ] = [ ]
  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
    .map (response => response.json())
    .subscribe(
      fotos => {   this.fotos = fotos },
       erro => console.log(erro));
      }

  ngOnInit() {
  }

}
