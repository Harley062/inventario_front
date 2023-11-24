import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Equipamento } from '../model/equipamento';
import { EquipamentoService } from '../services/equipamento.service';

@Component({
  selector: 'app-inserir-equipamento',
  templateUrl: './inserir-equipamento.component.html',
  styleUrls: ['./inserir-equipamento.component.css']
})
export class InserirEquipamentoComponent {

  codigo!: number;
  equipamento: Equipamento = new Equipamento();

  constructor(private EquipamentoService: EquipamentoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  retornar() {
    this.router.navigate(['listar-equipamento']);
  }

  onSubmit(){
    this.equipamento.codigo = 0;
    this.EquipamentoService.incluirEquipamento(this.equipamento).subscribe( data => {
      console.log(data);
      this.retornar();
    });
  }


}
