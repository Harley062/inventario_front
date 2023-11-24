import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-conultar-pessoa',
  templateUrl: './consultar-pessoa.component.html',
  styleUrls: ['./consultar-pessoa.component.css']
})
export class ConsultarPessoaComponent {
  
  codigo! :number;
  pessoa! : Pessoa;

  constructor(private PessoaService :PessoaService, private router :Router, private route :ActivatedRoute) {}

  ngOnInit() : void{
    this.codigo = this.route.snapshot.params['codigo'];
    this.pessoa = new Pessoa();
    this.PessoaService.consultarPessoa(this.codigo).subscribe (data => {
      this.pessoa = data;
    });
  }

  retornar(){
    this.router.navigate(['listar-pessoa']);
  }


}
