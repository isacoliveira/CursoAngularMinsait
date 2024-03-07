import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/helpers/service/produto.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/core/helpers/model/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit{
  produtoForm: FormGroup;
  constructor(private service : ProdutoService, private formBuilder : FormBuilder, private router: Router, private route : ActivatedRoute) {}
  
  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      id          : new FormControl(null, Validators.required),
      nome        : new FormControl(null, Validators.required),
      codigoBarra : new FormControl(null, Validators.required),
      quantidade  : new FormControl(null, Validators.required),
      preco       : new FormControl(null, Validators.required),
    });     
    this.service.consultarProduto(this.route.snapshot.paramMap.get('idProduto')).subscribe({
      next: (dados) => {
        this.produtoForm.get("id")?.setValue(dados.id);
        this.produtoForm.get("nome")?.setValue(dados.nome);
        this.produtoForm.get("codigoBarra")?.setValue(dados.codigoBarra);
        this.produtoForm.get("quantidade")?.setValue(dados.quantidade);
        this.produtoForm.get("preco")?.setValue(dados.preco);
      },
      error: (exception => {
        console.info('Error', exception);
      })
    });    
  }
  
  editarProduto() : void {
    const produto : Produto = this.produtoForm.value as Produto;    
    this.service.editarProduto(produto).subscribe({
      next: (dados) => {
        Swal.fire({
          title: "Sucesso",
          text: "Produto editado com sucesso",
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
