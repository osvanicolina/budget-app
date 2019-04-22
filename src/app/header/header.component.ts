import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../presupuestos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  montoIngresos: number;
  montoEgresos: number;
  
  constructor(private presupuestoService: PresupuestosService) { 
    this.presupuestoService.actualizarMontoIngreso.subscribe(
      (montoIngreso: number) => this.montoIngresos = this.montoIngresos - montoIngreso
    );
    this.presupuestoService.actualizarMontoEgreso.subscribe(
      (montoEgreso: number) => this.montoEgresos = this.montoEgresos - montoEgreso
    );
    this.presupuestoService.actualizarPresupuestos.subscribe(
      () => {
        this.montoIngresos = this.presupuestoService.montoIngresos;
        this.montoEgresos = this.presupuestoService.montoEgresos;
      }
    );
  }

  ngOnInit() {
    this.montoIngresos = this.presupuestoService.montoIngresos;
    this.montoEgresos = this.presupuestoService.montoEgresos;
  }

}
