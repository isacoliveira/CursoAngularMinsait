import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {
  usuarioForm = new FormGroup({
    txtNome   : new FormControl('', Validators.required),
    txtIdade  : new FormControl('', Validators.required),
  });
}
