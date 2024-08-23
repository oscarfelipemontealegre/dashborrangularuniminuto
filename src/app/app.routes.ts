import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { SoporteComponent } from './soporte/soporte.component';
import { NgModule } from '@angular/core';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashbordgraficasComponent } from './dashbordgraficas/dashbordgraficas.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Home route
  { path: 'configuracion', component: ConfiguracionComponent }, // Settings route
  { path: 'soporte', component: SoporteComponent }, // Support route
  { path: 'login', component: LoginComponent},
  { path: 'salir', component: LogoutComponent },
  {path:'registro', component: RegistroComponent},
  {path:'graficas', component: DashbordgraficasComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }