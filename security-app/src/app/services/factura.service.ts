import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from './../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  private URL = 'http://localhost:3000/';
  constructor(private httpCliente: HttpClient) { }

  getFacturas(){
    return this.httpCliente.get<Factura[]>(this.URL + 'facturas');
  }
}

