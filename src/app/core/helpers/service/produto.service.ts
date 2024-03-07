import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })

export class ProdutoService {

  apiUrl:string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  cadastrarProduto(produto: Produto) {
    return this.http.post<Produto>(`${this.apiUrl}/produtos`, produto);
  }
  
  editarProduto(produto: Produto) {
    return this.http.put(`${this.apiUrl}/produtos/${produto.id}`, produto);
  }

  consultarProduto(idProduto: string | null) {
    return this.http.get<Produto>(`${this.apiUrl}/produtos/${idProduto}`);
  }
  
  excluirProduto(idProduto: number) {
    return this.http.delete(`${this.apiUrl}/produtos/${idProduto}`);
  }

  Listar() {
    return this.http.get<Produto[]>(`${this.apiUrl}/produtos`);
  }

}
