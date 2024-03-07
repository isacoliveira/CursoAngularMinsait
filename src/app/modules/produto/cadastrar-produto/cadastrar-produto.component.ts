import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/helpers/service/produto.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/core/helpers/model/produto';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit{
  produtoForm: FormGroup;
  constructor(private service : ProdutoService, private formBuilder : FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      nome        : new FormControl(null, Validators.required),
      codigoBarra : new FormControl(null, Validators.required),
      quantidade  : new FormControl(null, Validators.required),
      preco       : new FormControl(null, Validators.required),
    });    
  }
  
  cadastrarProduto() : void {
    const produto : Produto = this.produtoForm.value as Produto;
    this.service.cadastrarProduto(produto).subscribe({
      next: (dados) => {
        Swal.fire({
          title: "Sucesso",
          text: "Produto cadastrado com sucesso",
          icon: "success",
          confirmButtonText : "Ok"
        }).then((ret) => {
          this.router.navigateByUrl('/produto');
        });
      },
      error: (exception => {
        console.info('Error', exception);
      })
    });
  }
}
