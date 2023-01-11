import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from '../components/employee/add-employee/add-employee.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { ProjectInformationComponent } from '../components/project-information/project-information.component';
import { TrainingInformationComponent } from '../components/training-information/training-information.component';
import { VisaComponent } from '../components/visa/visa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
