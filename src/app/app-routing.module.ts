import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { ConsultarPessoaComponent } from './consultar-pessoa/consultar-pessoa.component';
import { AlterarPessoaComponent } from './alterar-pessoa/alterar-pessoa.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';

import { ListarEquipamentoComponent } from './listar-equipamento/listar-equipamento.component';
import { ConsultarEquipamentoComponent } from './consultar-equipamento/consultar-equipamento.component';
import { AlterarEquipamentoComponent } from './alterar-equipamento/alterar-equipamento.component';
import { InserirEquipamentoComponent } from './inserir-equipamento/inserir-equipamento.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  
  {path: 'listar-pessoa', component: ListarPessoaComponent},
  {path: 'inserir-pessoa', component: InserirPessoaComponent},
  {path: 'consultar-pessoa/:codigo', component: ConsultarPessoaComponent},
  {path: 'alterar-pessoa/:codigo', component: AlterarPessoaComponent},
  
  {path: 'listar-equipamento', component: ListarEquipamentoComponent},
  {path: 'inserir-equipamento', component: InserirEquipamentoComponent},
  {path: 'consultar-equipamento/:codigo', component: ConsultarEquipamentoComponent},
  {path: 'alterar-equipamento/:codigo', component: AlterarEquipamentoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
