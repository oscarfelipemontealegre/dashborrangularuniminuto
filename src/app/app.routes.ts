import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { SoporteComponent } from './soporte/soporte.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: ' ', component: HomeComponent }, // Home route
  { path: 'configuracion', component: ConfiguracionComponent }, // Settings route
  { path: 'soporte', component: SoporteComponent }, // Support route
  {path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }