import { Injectable } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FacturaDataServiceService {

  facturas: Factura[];

  constructor(private httpCliente: HttpClient) { }

  saveFactura(factura: Factura){
  // factura.id = this.facturas.length;
  // this.facturas.push(factura);
  this.httpCliente.post('http://localhost:3000/facturas', factura).subscribe(
    response => {console.log("result: " + response) },
    error => {console.log("error " + error)}
  );
}

  getFacturas(){
  return this.getFacturas;
}

getFactura(id: number){
  id = id;
  return this.facturas[id];
}

updateFactura(id: number, factura: Factura){
  this.facturas[id] = factura; // en vez de i le puse id
}

deleteFactura(id: number){
  this.facturas.splice(id, 1);
}

}
