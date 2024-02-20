import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Usuario } from '../model/usuario';

@Injectable({ providedIn: 'root' })

export class UsuarioService {
  apiUrl:string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  Listar() {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`);
  }

}
