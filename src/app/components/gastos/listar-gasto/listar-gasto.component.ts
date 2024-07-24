import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-gasto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-gasto.component.html',
  styleUrl: './listar-gasto.component.css',
})
export class ListarGastoComponent implements OnInit, OnDestroy {
  private _presupuestoServices = inject(PresupuestoService);
  subscription!: Subscription;
  presupuesto!: number;
  restante!: number;
  listGastos: any[] = [];

  ngOnInit(): void {
    this.presupuesto = this._presupuestoServices.presupuesto;
    this.restante = this._presupuestoServices.restante;

    this.subscription = this._presupuestoServices.getGastos()
      .subscribe((data) => {
        //this.restante = this._presupuestoServices.restante;
        this.restante = this.restante - data.cantidad;
        this.listGastos.push(data);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  aplicarColorRestante(){
    if(this.presupuesto/4 > this.restante){
      return 'alert alert-danger'
    }else if(this.presupuesto/2 > this.restante ){
      return 'alert alert-warning'
    }else{
   return 'alert alert-secondary'
    }
  }


}


