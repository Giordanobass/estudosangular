import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {
  
  items!: MenuItem[];
  home!: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Lançamentos', routerLink: 'lancamentos'},
      {label: 'Notebook'},
      {label: 'Accessories'},
      {label: 'Cadastro', routerLink: 'cadastro'},
      {label: 'Editar', icon:'pi pi-fw pi-user-edit'}
  ];

  this.home = {icon: 'pi pi-home', routerLink: '/'};
  }
}
