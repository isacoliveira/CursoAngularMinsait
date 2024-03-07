import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './modules/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { ListaUsuarioComponent } from './modules/usuario/lista-usuario/lista-usuario.component';
import { ListaProdutoComponent } from './modules/produto/lista-produto/lista-produto.component';
import { EditarUsuarioComponent } from './modules/usuario/editar-usuario/editar-usuario.component';
import { CadastrarUsuarioComponent } from './modules/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { EditarProdutoComponent } from './modules/produto/editar-produto/editar-produto.component';
import { CadastrarProdutoComponent } from './modules/produto/cadastrar-produto/cadastrar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ListaUsuarioComponent,
    ListaProdutoComponent,
    EditarUsuarioComponent,
    CadastrarUsuarioComponent,
    EditarProdutoComponent,
    CadastrarProdutoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
