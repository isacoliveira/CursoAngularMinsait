import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/helpers/model/usuario';
import { UsuarioService } from 'src/app/core/helpers/service/usuario.service';
import Swal from 'sweetalert2';

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

  excluirUsuario(id: number | undefined) : void {
    Swal.fire({
      title : "Excluir Usuário",
      text  : "Tem certeza que deseja exluir este usuário?",
      icon  : "warning",
      showCancelButton: true,
      confirmButtonText: "Excluir", 
    }).then((Retorno) => {
      if(Retorno.isConfirmed) {
        this.service.excluirUsuario(id).subscribe({
          next: (dados) => {
            Swal.fire({
              title : "Confirmação",
              text  : "Usuário Excluído com sucesso",
              icon  : "success",
              confirmButtonText : "Ok"
            }).then((ret) => {
              var usuarioDeletado : number = this.UsuarioList.findIndex(usu => usu.id == id);
              this.UsuarioList.splice(usuarioDeletado, 1);
            });
          },
          error: (exception => {
            console.info('Error', exception);
          })
        });
      }
    });
  }
}
