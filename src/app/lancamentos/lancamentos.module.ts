import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosComponent } from './lancamentos.component';
import { FormsModule } from '@angular/forms';

import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LancamentosComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    SharedModule
  ],
  exports: [LancamentosComponent]
})
export class LancamentosModule { }
