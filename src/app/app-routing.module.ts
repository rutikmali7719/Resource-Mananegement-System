import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectInformationComponent } from './components/project-information/project-information.component';
import { ReportComponent } from './components/report/report.component';
import { TrainingInformationComponent } from './components/training-information/training-information.component';
import { VisaComponent } from './components/visa/visa.component';
import { PageNotFoundComponent } from './sidebar/page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { 
    path:'',
  component:LoginComponent
 
 },
 { 
  path:'login',
component:LoginComponent

}, 
  { 
    path:'employeeList',
  component:EmployeeComponent
 
 },
 { path:'addEmployee',
 component:AddEmployeeComponent
},
{ path:'employeeList/edit-employee',
 component:AddEmployeeComponent
},
{
 path:'projectdata',
 component:ProjectInformationComponent
},
{
 path:'trainingdata',
 component:TrainingInformationComponent
},
{
 path:'visadata',
 component:VisaComponent
 },
 {
  path: 'report',
  component:ReportComponent
},
 {
  path: '**',
  component:PageNotFoundComponent
},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
