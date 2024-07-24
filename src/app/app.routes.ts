import { Routes } from '@angular/router';
import { IngresaGastoComponent } from './components/gastos/ingresa-gasto/ingresa-gasto.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' },
  { path: 'ingresarPresupuesto', component: PresupuestoComponent },
  { path: 'gastos', component: GastosComponent },
  { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'}
];
