import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/factura';
import { FacturaDataServiceService } from './../../services/factura-data-service.service';

@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})export class FacturaFormComponent implements OnInit {

  constructor(private  router: Router,
              private service: FacturaDataServiceService,
              private route: ActivatedRoute) { }

  idFactura: number;
  cliente_idFactura: string;
  empleado_idFactura: number;
  creadoFactura: Date;
  estadoFactura: number;
  idParam: number;

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')){
      this.idParam = +this.route.snapshot.paramMap.get('id');

      if (this.idParam != null){
        console.log(this.idParam);
        const factura = this.service.getFactura(this.idParam);
        this.idFactura = factura.id;
        this.cliente_idFactura = factura.cliente_id;
        this.empleado_idFactura = factura.empleado_id;
        this.creadoFactura = factura.creado;
        this.estadoFactura = factura.estado;
      }
    }
  }

  // para el boton de guardar en el formulario
  ngOnGuardar(): void {
   /* const factura = new Factura( this.idFactura,this.cliente_idFactura, this.empleado_idFactura, this.creadoFactura, this.estadoFactura);
    if (this.idFactura != null) {
      this.service.updateFactura(this.idFactura, factura);
    }else{
      this.service.saveFactura(factura);
    }
    this.router.navigate(['facturas']);*/
    this.router.navigate(['facturas']);
  }

  // para el boton de eliminar en el formulario
  ngOnEliminar(): void {
    this.router.navigate(['facturas']);
  }
  // para el boton de cancelar en el formulario
  ngOnCancelar(): void {
    this.router.navigate(['facturas']);
  }

}

