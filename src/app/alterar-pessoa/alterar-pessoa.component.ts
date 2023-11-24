import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-alterar-pessoa',
  templateUrl: './alterar-pessoa.component.html',
  styleUrls: ['./alterar-pessoa.component.css']
})
export class AlterarPessoaComponent {

  codigo!: number;
  pessoa!: Pessoa;

  constructor(private PessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.params['codigo'];
    this.pessoa = new Pessoa();
    this.PessoaService.consultarPessoa(this.codigo).subscribe(data => {
      this.pessoa = data;
    });
  }

  retornar() {
    this.router.navigate(['listar-pessoa']);
  }

  onSubmit(){
    this.PessoaService.alterarPessoa(this.codigo, this.pessoa).subscribe( data => {
      console.log(data);
      this.retornar();
    });
  }


}
