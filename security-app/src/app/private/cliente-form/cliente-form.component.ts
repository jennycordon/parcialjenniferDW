import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit(): void {
  }
  // para el boton de guardar en el formulario
  ngOnGuardar(): void {
    this.router.navigate(['clientes']);
  }
  // para el boton de eliminar en el formulario
  ngOnEliminar(): void {
    this.router.navigate(['clientes']);
  }
  // para el boton de cancelar en el formulario
  ngOnCancelar(): void {
    this.router.navigate(['clientes']);
  }

}
