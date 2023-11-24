import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EquipamentoService } from '../services/equipamento.service';
import { Equipamento } from '../model/equipamento';

@Component({
  selector: 'app-consultar-equipamento',
  templateUrl: './consultar-equipamento.component.html',
  styleUrls: ['./consultar-equipamento.component.css']
})
export class ConsultarEquipamentoComponent {
  
  codigo! :number;
  equipamento! : Equipamento;
  
  constructor(private EquipamentoService :EquipamentoService, private router :Router, private route :ActivatedRoute) {}

  ngOnInit() : void{
    this.codigo = this.route.snapshot.params['codigo'];
    this.equipamento = new Equipamento();
    this.EquipamentoService.consultarEquipamento(this.codigo).subscribe (data => {
      this.equipamento = data;
    });
  }

  retornar(){
    this.router.navigate(['listar-equipamento']);
  }


}
