import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFacturasComponent } from './productos-facturas.component';

describe('ProductosFacturasComponent', () => {
  let component: ProductosFacturasComponent;
  let fixture: ComponentFixture<ProductosFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosFacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
