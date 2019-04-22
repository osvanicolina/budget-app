import { Presupuesto } from './presupuesto.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PresupuestosService{
    presupuestoIngresos: Presupuesto[] = [
        new Presupuesto("Salario", 4000),
        new Presupuesto("Venta coche", 500),
    ]

    presupuestoEgresos: Presupuesto[] = [
        new Presupuesto("Renta departamento", 900),
        new Presupuesto("Ropa", 200)
    ]
    montoIngresos: number = 4500;
    montoEgresos: number = 1100;
    
    actualizarMontoIngreso = new EventEmitter<number>();
    actualizarMontoEgreso = new EventEmitter<number>();
    actualizarPresupuestos = new EventEmitter<any>();
    
    eliminarIngreso(index: number){
        this.montoIngresos = this.montoIngresos - this.presupuestoIngresos[index].cantidad;
        this.presupuestoIngresos.splice(index,1);
        console.log(this.presupuestoIngresos);
    }

    eliminarEgreso(index: number){
        this.montoEgresos = this.montoEgresos - this.presupuestoEgresos[index].cantidad;
        this.presupuestoEgresos.splice(index,1);
    }

    anadirPresupuesto(tipo:string, presupuesto: Presupuesto){
        if(tipo=="+"){
            this.presupuestoIngresos.push(presupuesto);
            this.montoIngresos = this.montoIngresos + presupuesto.cantidad;
        }
        else
        {
            this.presupuestoEgresos.push(presupuesto);
            this.montoEgresos = this.montoEgresos + presupuesto.cantidad;
        }
    }
}