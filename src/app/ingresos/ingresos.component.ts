import { Component, OnInit, Input } from '@angular/core';
import { PresupuestosService } from '../presupuestos.service';
import { Presupuesto } from '../presupuesto.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  @Input() presupuestoIngreso: Presupuesto;
  @Input() indice: number;

  constructor(private presupuestoService: PresupuestosService) { }

  ngOnInit() {

    }
  onEliminarIngreso(){
    this.presupuestoService.actualizarMontoIngreso.emit(this.presupuestoIngreso.cantidad);
    this.presupuestoService.eliminarIngreso(this.indice);
    this.presupuestoService.actualizarPresupuestos.emit();
  }
}
