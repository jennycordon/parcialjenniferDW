import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productofactura } from './../models/producto-factura';

@Injectable({
  providedIn: 'root'
})
export class ProductofacturaService {

  private URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  getProductofacturas(){
    return this.httpClient.get<Productofactura[]>(this.URL + 'productos_facturas');
  }
}
