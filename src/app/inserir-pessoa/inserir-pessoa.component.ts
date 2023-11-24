import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent {

  codigo!: number;
  pessoa: Pessoa = new Pessoa();
  
  constructor(private PessoaService: PessoaService,
    private router: Router) { }

  ngOnInit(): void {

  }

  retornar() {
    this.router.navigate(['listar-pessoa']);
  }

  onSubmit(){
    this.pessoa.codigo = 0;
    this.pessoa.ativo=true;
    this.PessoaService.incluirPessoa(this.pessoa).subscribe( data => {
      console.log(data);
      this.retornar();
    });
  }


}
