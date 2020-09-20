import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  getCliente(){
    return this.httpClient.get<Cliente[]>(this.URL + 'clientes');
  }
}
