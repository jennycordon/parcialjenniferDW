import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private URL = 'http://localhost:3000/';
  constructor(private httpCliente: HttpClient) { }

  getEmpleados(){
    return this.httpCliente.get<Empleado[]>(this.URL + 'empleados');
  }
}
