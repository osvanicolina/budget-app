import { Component, OnInit, Input } from '@angular/core';
import { PresupuestosService } from '../presupuestos.service';
import { Presupuesto } from '../presupuesto.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  @Input() presupuestoEgreso: Presupuesto;
  @Input() indice: number;
  @Input() montoIngresos:number;
  constructor(private presupuestoService: PresupuestosService) { }

  ngOnInit() {
  }

  onEliminarEgreso(){
    this.presupuestoService.actualizarMontoEgreso.emit(this.presupuestoEgreso.cantidad)
    this.presupuestoService.eliminarEgreso(this.indice);
  }

}
