import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../presupuesto.model';
import { PresupuestosService } from '../presupuestos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string = "+";
  nombre:string;
  cantidad:number;
  presupuesto: Presupuesto;
  constructor(private presupuestoService: PresupuestosService) { }

  ngOnInit() {
  }
  onAnadirPresupuesto(){
    this.presupuesto = new Presupuesto(this.nombre, this.cantidad);
    this.presupuestoService.anadirPresupuesto(this.tipo, this.presupuesto);
    this.presupuestoService.actualizarPresupuestos.emit();
  }
}
