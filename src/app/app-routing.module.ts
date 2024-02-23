import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ListaUsuarioComponent } from './modules/usuario/lista-usuario/lista-usuario.component';
import { ListaProdutoComponent } from './modules/produto/lista-produto/lista-produto.component';
import { EditarUsuarioComponent } from './modules/usuario/editar-usuario/editar-usuario.component';
import { CadastrarUsuarioComponent } from './modules/usuario/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  { path: ''                          , component: HomeComponent              },
  { path: 'home'                      , component: HomeComponent              },
  { path: 'usuario'                   , component: ListaUsuarioComponent      },
  { path: 'usuario/editar/:idUsuario' , component: EditarUsuarioComponent     },
  { path: 'usuario/cadastrar'         , component: CadastrarUsuarioComponent  },
  { path: 'produto'                   , component: ListaProdutoComponent      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }