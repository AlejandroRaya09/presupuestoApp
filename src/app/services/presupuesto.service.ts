import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  constructor() {}

  presupuesto: number = 0;
  restante: number = 0;
  private gastos$ = new Subject<any>();


  agregarGasto(gasto: any) {
    console.log(gasto)

    this.restante = this.restante - gasto.cantidad;
    console.log(this.restante)
    this.gastos$.next(gasto)
  }

  getGastos():Observable<any>{
    return this.gastos$.asObservable();
  }
  
}
