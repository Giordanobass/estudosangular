import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {
  
  valorFaturaJo!: number;
  valorFaturaOdy!: number;
  valorLuz!: number;
  valorAgua!: number;
  valorPrestacao!: number;
  valorInternet!: number;
  valorEmprestimo!: number;
  valorDizimo!: number;
  valorVigilante!: number;
  valorIptu!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(form);
  }

}
