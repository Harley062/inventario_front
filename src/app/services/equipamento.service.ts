import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from '../model/equipamento';

@Injectable({
  providedIn: 'root'
})

export class EquipamentoService {

  private url = "http://localhost:8080/cequipamento/equipamento";

  constructor(private httpClient: HttpClient) { }

  //Listar 
  listarEquipamento(): Observable<Equipamento[]> {
    return this.httpClient.get<Equipamento[]>(`${this.url}`);
  }

  //Servico para consulta da marca
  consultarEquipamento(codigo: number): Observable<Equipamento> {
    return this.httpClient.get<Equipamento>(`${this.url}/${codigo}`);
  }

  //Incluir marca
  incluirEquipamento(equipamento: Equipamento): Observable<Object> {
    return this.httpClient.post(`${this.url}`, equipamento);
  }

  //Alterar marca
  alterarEquipamento(codigo :number, equipamento: Equipamento): Observable<Object> {
    return this.httpClient.put(`${this.url}/${codigo}`, equipamento);
  }

  //Excluir
  excluirEquipamento(codigo: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${codigo}`);
  }
}
