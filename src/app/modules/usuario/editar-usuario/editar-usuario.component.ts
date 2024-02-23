import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/core/helpers/model/usuario';
import { UsuarioService } from 'src/app/core/helpers/service/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector    : 'app-editar-usuario',
  templateUrl : './editar-usuario.component.html',
  styleUrls   : ['./editar-usuario.component.css']
})

export class EditarUsuarioComponent implements OnInit {
  usuarioForm : FormGroup;
  constructor(private service : UsuarioService, private formBuilder : FormBuilder, private router: Router, private route : ActivatedRoute) {}

  ngOnInit(): void {
    const chkAtivo = document.getElementById('ativo') as HTMLInputElement;
    this.usuarioForm = this.formBuilder.group({
      id    : new FormControl('', Validators.required),
      nome  : new FormControl('', Validators.required),
      idade : new FormControl(null),
      ativo : new FormControl(null),
    });  

    this.service.consultarUsuario(this.route.snapshot.paramMap.get('idUsuario')).subscribe({
      next: (dados) => {
        this.usuarioForm.get("id")?.setValue(dados.id);
        this.usuarioForm.get("nome")?.setValue(dados.nome);
        this.usuarioForm.get("idade")?.setValue(dados.idade);
        chkAtivo.checked = dados.ativo;
      },
      error: (exception => {
        console.info('Error', exception);
      })
    });
  }

  editarUsuario() : void {
    const chkAtivo = document.getElementById('ativo') as HTMLInputElement;
    const usuario : Usuario = this.usuarioForm.value as Usuario;
    usuario.ativo = chkAtivo.checked;
    
    this.service.editarUsuario(usuario).subscribe({
      next: (dados) => {
        Swal.fire({
          title: "Sucesso",
          text: "Usuário editado com sucesso",
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