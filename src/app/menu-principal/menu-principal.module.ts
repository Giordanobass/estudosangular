import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu-principal.component';

import {BreadcrumbModule} from 'primeng/breadcrumb';


@NgModule({
  declarations: [MenuPrincipalComponent],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports:[MenuPrincipalComponent]
})
export class MenuPrincipalModule { }
