import { Component, inject, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { ListarGastoComponent } from "./listar-gasto/listar-gasto.component";
import { IngresaGastoComponent } from "./ingresa-gasto/ingresa-gasto.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [ListarGastoComponent, IngresaGastoComponent],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent implements OnInit{
  private _presupuestoServices = inject(PresupuestoService);
  private router = inject(Router);
  
  ngOnInit(): void {
    if(this._presupuestoServices.presupuesto == 0){
      this.router.navigate(['ingresarPresupuesto'])
    }
  }


}
