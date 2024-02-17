import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarUsuarioComponent } from './pages/usuario/listar-usuario/listar-usuario.component';
import { ListarProdutoComponent } from './pages/produto/listar-produto/listar-produto.component';

const routes: Routes = [
  { path: ''        , redirectTo: 'home'                , pathMatch: 'full' },
  { path: 'home'    , component: HomeComponent          , pathMatch: 'full' },
  { path: 'ListarUsuario' , component: ListarUsuarioComponent , pathMatch: 'full' },
  { path: 'ListarProduto' , component: ListarProdutoComponent , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }