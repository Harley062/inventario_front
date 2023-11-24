import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa.service';


@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {


  pessoas!: Pessoa[];

  constructor(private PessoaService: PessoaService, private router: Router) { }

  ngOnInit(): void {

    this.listarPessoas();

  }

  //Chama o serviço para a listagem das marcas
  private listarPessoas() {
    this.PessoaService.listarPessoas().subscribe(data => {
      this.pessoas = data;
    });
  }

  excluirPessoa(codigo: number) {
    if (confirm("Deseja excluir a Pessoa?")) {
      this.PessoaService.excluirPessoa(codigo).subscribe(data => {
        console.log(data);
        this.listarPessoas();
      })
    }
  }
  
  inserirPessoa() {
    this.router.navigate(['inserir-pessoa'])
  }

  alterarPessoa(codigo: number) {
    this.router.navigate(['alterar-pessoa', codigo])
  }

  consultarPessoa(codigo: number) {
    this.router.navigate(['consultar-pessoa', codigo])
  }




}
