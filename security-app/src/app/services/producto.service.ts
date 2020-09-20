import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  getProductos(){
    return this.httpClient.get<Producto[]>(this.URL + 'productos');
  }
}
