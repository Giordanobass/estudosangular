import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { CadastroPessoa } from '../shared/models/cadastro.model';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public cadastro: CadastroPessoa = new CadastroPessoa();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  consultaCEP(event: Event, form: NgForm) {
    var cep = (event.target as HTMLInputElement).value;
    cep = cep.replace(/\D/g, '');
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.resetaDadosFormulario(form)
        this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
          .pipe(map(dados => dados))
          .subscribe(dados => { this.populaDadosForm(dados, form) });
      }
    }
  }

  populaDadosForm(dados: any, formulario: NgForm) {
    formulario.form.patchValue({
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
    });
  }

  resetaDadosFormulario(formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  onSubmit(forms: any) {
    this.http.post('https://httpbin.org/post', JSON.stringify(forms.value))
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));
  }

  verificaValidTouched(campo: any) {
    console.log(campo)
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

}
