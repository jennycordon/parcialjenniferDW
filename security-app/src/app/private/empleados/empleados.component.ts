import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from './../../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadosService) { }

  empleados: Empleado[];

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
      }
    );
  }

}
