import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  service: AppService;
  title = 'Bem-vindo ao CaelumPic!';
  fotos: FotoComponent[] = [];
  mensagem: String = ''

  constructor(service: AppService) {

  this.service = service

    service.listar()
    .subscribe(fotos => this.fotos = fotos, erro => console.log(erro))
  };

  delete(foto: FotoComponent) {
    this.service.deletar(foto)
    .subscribe(
      () => {

        this.mensagem = `${foto.titulo} removida com sucesso`
        let novaListaFotos = this.fotos.slice(0);

        //pega o indeice da foto removida, e cria uma variavel pra indice
        // tslint:disable-next-line:prefer-const
        let indiceDaFotoRemovida = novaListaFotos.indexOf(foto)

        //cria uma novalista sem a foto removida
        novaListaFotos.splice(indiceDaFotoRemovida,1)


        //atribui a lsita sem a foto 
        this.fotos = novaListaFotos;
        
      }
      , erro => console.log(erro)
    )

  }

}
