import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { MatAutocompleteModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatSliderModule  } from '@angular/material'; @NgModule({ imports: [ MatAutocompleteModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatRadioModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatSlideToggleModule ]})
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { VisaComponent } from './components/visa/visa.component';
import { ProjectInformationComponent } from './components/project-information/project-information.component';
import { TrainingInformationComponent } from './components/training-information/training-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProjectFormComponent } from './components/project-information/add-project-form/add-project-form.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { SidebarRoutingModule } from './sidebar/sidebar-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { SearchProjectPipe } from './pipe/search-project.pipe';
import { UpdatetrainingComponent } from './components/training-information/updatetraining/updatetraining.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ReportComponent } from './components/report/report.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VisaComponent,
    ProjectInformationComponent,
    TrainingInformationComponent,
    AddProjectFormComponent,
    SidebarComponent,
    SearchProjectPipe,
    UpdatetrainingComponent,
    ReportComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,
    SidebarRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    

   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
