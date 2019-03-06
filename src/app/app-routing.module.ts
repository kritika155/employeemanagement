import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { EmployeesComponent } from './employees/employees.component';
const routes: Routes = [
  
    { path: '', redirectTo: '/status', pathMatch: 'full' },
    { path: 'status',    component: StatusComponent },
    {path: 'employees',    component: EmployeesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
