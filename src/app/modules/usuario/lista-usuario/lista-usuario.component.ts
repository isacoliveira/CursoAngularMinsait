import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/helpers/model/usuario';
import { UsuarioService } from 'src/app/core/helpers/service/usuario.service';

@Component({
  selector    : 'app-lista-usuario',
  templateUrl : './lista-usuario.component.html',
  styleUrls   : ['./lista-usuario.component.css']
})

export class ListaUsuarioComponent implements OnInit {
  UsuarioList: Usuario[];
  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.service.Listar().subscribe({
      next: (dados) => {
        this.UsuarioList = dados;
      },
      error: (exception => {
        console.info('Error', exception);
      })
    });
  }

}
