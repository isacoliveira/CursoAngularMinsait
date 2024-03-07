import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })

export class UsuarioService {
  apiUrl:string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  cadastrarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(`${this.apiUrl}/usuarios`, usuario);
  }
  
  editarUsuario(usuario: Usuario) {
    return this.http.put(`${this.apiUrl}/usuarios/${usuario.id}`, usuario);
  }

  consultarUsuario(idUsuario: string | null) {
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/${idUsuario}`);
  }
  
  excluirUsuario(idUsuario: number | undefined) {
    return this.http.delete(`${this.apiUrl}/usuarios/${idUsuario}`);
  }

  Listar() {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`);
  }

}
