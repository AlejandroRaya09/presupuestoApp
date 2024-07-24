import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresa-gasto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingresa-gasto.component.html',
  styleUrl: './ingresa-gasto.component.css',
})
export class IngresaGastoComponent {
  private _presupuestoService = inject(PresupuestoService)

  nombreGasto: string = '';
  cantidad!: number;
  formularioIncorrecto: boolean = false;
  textIncorrecto: string = '';

  agregarGasto() {
    if(this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto=true
      this.textIncorrecto = 'Cantidad ingresada es MAYOR al restante'
      return
    }

    if (this.nombreGasto == '' || this.cantidad <= 0) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Nombre/Gasto o Cantidad Incorrecto'
    } else {
      //CREAMOS OBJETO 
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }

      //ENVIAMOS OBJETO A LOS SUSCRIPTORES
      this._presupuestoService.agregarGasto(GASTO)

      //RESETEAMOS FORMULARIOS
      this.formularioIncorrecto = false;
      this.cantidad = 0;
      this.nombreGasto = '';
    }
  }
}
