import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipamento } from '../model/equipamento';
import { EquipamentoService } from '../services/equipamento.service';


@Component({
  selector: 'app-lista-equipamento',
  templateUrl: './listar-equipamento.component.html',
  styleUrls: ['./listar-equipamento.component.css']
})
export class ListarEquipamentosComponent implements OnInit {


  equipamentos!: Equipamento[];

  constructor(private EquipamentoService: EquipamentoService, private router: Router) { }

  ngOnInit(): void {

    this.listarEquipamentos();

  }

  //Chama o serviço para a listagem das marcas
  private listarEquipamentos() {
    this.EquipamentoService.listarEquipamento().subscribe(data => {
      this.equipamentos = data;
    });
  }

  excluirEquipamento(codigo: number) {
    if (confirm("Deseja excluir a Pessoa?")) {
      this.EquipamentoService.excluirEquipamento(codigo).subscribe(data => {
        console.log(data);
        this.listarEquipamentos();
      })
    }
  }
  
  inserirEquipamento() {
    this.router.navigate(['inserir-equipamento'])
  }

  alterarEquipamento(codigo: number) {
    this.router.navigate(['alterar-equipamento', codigo])
  }

  consultarEquipamento(codigo: number) {
    this.router.navigate(['consultar-equipamento', codigo])
  }
}
