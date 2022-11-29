import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'menus', component: MenusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
