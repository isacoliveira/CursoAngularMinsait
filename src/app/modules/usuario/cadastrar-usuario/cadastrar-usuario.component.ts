import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/helpers/model/usuario';
import { UsuarioService } from 'src/app/core/helpers/service/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector    : 'app-cadastrar-usuario',
  templateUrl : './cadastrar-usuario.component.html',
  styleUrls   : ['./cadastrar-usuario.component.css']
})

export class CadastrarUsuarioComponent implements OnInit{
  usuarioForm: FormGroup;
  constructor(private service : UsuarioService, private formBuilder : FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome  : new FormControl('', Validators.required),
      idade : new FormControl(null),
    });    
  }

  cadastrarUsuario() : void {
    const usuario : Usuario = this.usuarioForm.value as Usuario;
    usuario.ativo = true;

    this.service.cadastrarUsuario(usuario).subscribe({
      next: (dados) => {
        Swal.fire({
          title: "Sucesso",
          text: "Usuário cadastrado com sucesso",
          icon: "success",
          confirmButtonText : "Ok"
        }).then((ret) => {
          this.router.navigateByUrl('/usuario');
        });
      },
      error: (exception => {
        console.info('Error', exception);
      })
    });

  }

}
