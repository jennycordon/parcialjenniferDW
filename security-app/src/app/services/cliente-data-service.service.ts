import { Injectable } from '@angular/core';
import { Cliente } from './../models/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteDataServiceService {

  /*clientes: Cliente[]=[
    new Cliente(1,"juan perez","ciudad1","123-4"),
    new Cliente(2,"juan gomez","ciudad2","123-4")
  ];*/

  clientes: Cliente[];

  constructor(private httpCliente: HttpClient) { }

  saveCliente(cliente: Cliente){
  // cliente.id = this.clientes.length;
  // this.clientes.push(cliente);
  this.httpCliente.post('http://localhost:3000/clientes', cliente).subscribe(
    response => {console.log("result: " + response) },
    error => {console.log("error " + error)}
  );
}

  getClientes(){
  return this.getClientes;
}

getCliente(id: number){
  id = id;
  return this.clientes[id];
}

updateCliente(id: number, cliente: Cliente){
  this.clientes[id] = cliente; // en vez de i le puse id
}

deleteCliente(id: number){
  this.clientes.splice(id, 1);
}

}
