import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'department', component: DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
