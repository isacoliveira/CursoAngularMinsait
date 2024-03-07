import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/helpers/model/produto';
import { ProdutoService } from 'src/app/core/helpers/service/produto.service';

@Component({
  selector    : 'app-lista-produto',
  templateUrl : './lista-produto.component.html',
  styleUrls   : ['./lista-produto.component.css']
})

export class ListaProdutoComponent implements OnInit {
  ProdutoList: Produto[];
  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.Listar().subscribe({
      next: (dados) => {
        this.ProdutoList = dados;
        console.log(dados);
      },
      error: (exception => {
        console.info('Error', exception);
      })
    });    
  }

  excluirProduro(idProduto: number) {
    Swal.fire({
      title : "Excluir Produto",
      text  : "Tem certeza que deseja exluir este produto?",
      icon  : "warning",
      showCancelButton: true,
      confirmButtonText: "Excluir", 
    }).then((Retorno) => {
      if(Retorno.isConfirmed) {
        this.service.excluirProduto(idProduto).subscribe({
          next: (dados) => {
            Swal.fire({
              title : "Confirmação",
              text  : "Produto Excluído com sucesso",
              icon  : "success",
              confirmButtonText : "Ok"
            }).then((ret) => {
              var produtoDeletado : number = this.ProdutoList.findIndex(prd => prd.id == idProduto);
              this.ProdutoList.splice(produtoDeletado, 1);
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
