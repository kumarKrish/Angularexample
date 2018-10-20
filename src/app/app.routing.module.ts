import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeList } from './employees/List.component';
import { EmployeeDetail } from './employees/detail.component';


const routes: Routes = [
  { path: '', component: EmployeeList },
  { path: 'detail', component: EmployeeDetail},
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
