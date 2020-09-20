import { Component, OnInit } from '@angular/core';
import { ProductofacturaService } from './../../services/producto-factura.service';
import { Productofactura } from './../../models/producto-factura';

@Component({
  selector: 'app-productos-facturas',
  templateUrl: './productos-facturas.component.html',
  styleUrls: ['./productos-facturas.component.css']
})
export class ProductosFacturasComponent implements OnInit {

  constructor(private productoFacturaService: ProductofacturaService) { }

  productosFacturas: Productofactura[];
  ngOnInit(): void {
    this.productoFacturaService.getProductofacturas().subscribe(
      res => {
        this.productosFacturas = res;
      }
    );
  }

}
