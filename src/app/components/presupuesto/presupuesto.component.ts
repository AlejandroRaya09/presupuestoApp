import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presupuesto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './presupuesto.component.html',
  styleUrl: './presupuesto.component.css',
})
export class PresupuestoComponent {

  private _PresupuestoServices = inject(PresupuestoService);
  private router = inject(Router);

  cantidad!: number;
  cantidadIncorrecta: boolean = false;

  agregar() {
    if (this.cantidad > 0) {
      this.cantidadIncorrecta = false;
      this._PresupuestoServices.presupuesto = this.cantidad;
      this._PresupuestoServices.restante = this.cantidad
      this.router.navigate(['/gastos'])
    } else {
      this.cantidadIncorrecta = true;
    }
  }
}
