import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InicioComponent } from './inicio/inicio.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { ConsultarPessoaComponent } from './consultar-pessoa/consultar-pessoa.component';
import { AlterarPessoaComponent } from './alterar-pessoa/alterar-pessoa.component';
import { ListarEquipamentoComponent } from './listar-equipamento/listar-equipamento.component';
import { InserirEquipamentoComponent } from './inserir-equipamento/inserir-equipamento.component';
import { AlterarEquipamentoComponent } from './alterar-equipamento/alterar-equipamento.component';
import { ConsultarEquipamentoComponent } from './consultar-equipamento/consultar-equipamento.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListarPessoaComponent,
    InserirPessoaComponent,
    ConsultarPessoaComponent,
    AlterarPessoaComponent,
    ListarEquipamentoComponent,
    InserirEquipamentoComponent,
    AlterarEquipamentoComponent,
    ConsultarEquipamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
