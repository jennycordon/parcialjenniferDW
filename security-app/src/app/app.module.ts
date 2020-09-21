import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ClientesComponent } from './private/clientes/clientes.component';
import { EmpleadosComponent } from './private/empleados/empleados.component';
import { FacturasComponent } from './private/facturas/facturas.component';
import { ProductosComponent } from './private/productos/productos.component';
import { ProductosFacturasComponent } from './private/productos-facturas/productos-facturas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { InterceptorService } from './services/interceptor.service';
import { ClienteFormComponent } from './private/cliente-form/cliente-form.component';
import { FacturaFormComponent } from './private/factura-form/factura-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientesComponent,
    EmpleadosComponent,
    FacturasComponent,
    ProductosComponent,
    ProductosFacturasComponent,
    ClienteFormComponent,
    FacturaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
