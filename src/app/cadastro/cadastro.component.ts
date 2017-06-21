import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent();
  formCadastro: FormGroup;
  service: AppService
  rota: ActivatedRoute
  router: Router;

  constructor( formBuilder: FormBuilder, service: AppService, rota: ActivatedRoute) {
    // tslint:disable-next-line:no-unused-expression
    this.rota = rota
    this.service = service
    this.router = this.router
    this.rota.params.subscribe(
      parametros => {
        // tslint:disable-next-line:prefer-const
        let id = parametros['id']

        if (id) {

          this.service.detalheFoto(id)
          .subscribe(
            (foto) => {
              this.foto = foto
            }
            , erro => console.log(erro)
          )
        }
      }
    )

    this.formCadastro = formBuilder.group({
      titulo: ['' , Validators.compose([Validators.required, Validators.minLength(3)])],
      url: ['', Validators.compose([Validators.required])],
      descricao: ['']
    })
  }

  ngOnInit() {
  }

  cadastrar(event: Event) {
    event.preventDefault()
    this.service.cadastrar(this.foto)
    .subscribe(
      () => {
      console.log('Imagem cadastrada'),
      this.router.navigate([''])
    }
    , erro => console.log(erro)
    )
  }

}
