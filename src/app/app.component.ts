import { Component, OnInit } from '@angular/core';
import { Presupuesto } from './presupuesto.model';
import { PresupuestosService } from './presupuestos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'presupuesto-app';
  presupuestoEgresos: Presupuesto[] = [];
  presupuestoIngresos: Presupuesto[] = [];
  montoIngresos: number;
  constructor(private presupuestoService: PresupuestosService){
    this.presupuestoService.actualizarMontoIngreso.subscribe(
      (monto:number) => {
        this.presupuestoIngresos = this.presupuestoService.presupuestoIngresos;
        this.montoIngresos = this.presupuestoService.montoIngresos;
      } 
    );
    this.presupuestoService.actualizarMontoEgreso.subscribe(
      (monto:number) => {
        this.presupuestoEgresos = this.presupuestoService.presupuestoEgresos;
      } 
    );
    this.presupuestoService.actualizarPresupuestos.subscribe(
      () => {
        this.presupuestoIngresos = this.presupuestoService.presupuestoIngresos;
        this.presupuestoEgresos = this.presupuestoService.presupuestoEgresos;
        this.montoIngresos = this.presupuestoService.montoIngresos;
      }
    );
  }
  
  ngOnInit():void {
    this.presupuestoEgresos = this.presupuestoService.presupuestoEgresos; 
    this.presupuestoIngresos = this.presupuestoService.presupuestoIngresos; 
    this.montoIngresos = this.presupuestoService.montoIngresos;
  }

}
