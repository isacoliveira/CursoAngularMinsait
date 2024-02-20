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
import { CadastrarUsuarioComponent } from './modules/usuario/cadastrar-usuario/cadastrar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ListaUsuarioComponent,
    ListaProdutoComponent,
    CadastrarUsuarioComponent,
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
