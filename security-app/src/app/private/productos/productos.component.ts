import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  productos: Producto[];
  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
      }
    );
  }

}
