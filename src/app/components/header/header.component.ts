import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  ListarUsuario : string = "";
  ListarProduto : string = "";
  Home          : string = "";
  constructor () {}

  ngOnInit(): void {
    this.Home           = window.location.toString().indexOf('home') != -1 ? "active": "";
    this.ListarProduto  = window.location.toString().indexOf('ListarProduto') != -1 ? "active": "";
    this.ListarUsuario  = window.location.toString().indexOf('ListarUsuario') != -1 ? "active": "";
  }

}
