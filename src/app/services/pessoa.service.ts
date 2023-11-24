import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  private url = "http://localhost:8080/cpessoa/pessoa";

  constructor(private httpClient: HttpClient) { }

  //Listar as marcas a partir da chamada do método API REST que está contido na URL especificada
  listarPessoas(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(`${this.url}`);
  }

  //Servico para consulta da marca
  consultarPessoa(codigo: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(`${this.url}/${codigo}`);
  }

  //Incluir marca
  incluirPessoa(marca: Pessoa): Observable<Object> {
    return this.httpClient.post(`${this.url}`, marca);
  }

  //Alterar marca
  alterarPessoa(codigo :number, marca: Pessoa): Observable<Object> {
    return this.httpClient.put(`${this.url}/${codigo}`, marca);
  }

  //Excluir
  excluirPessoa(codigo: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${codigo}`);
  }
}
