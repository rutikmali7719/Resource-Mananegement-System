import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  displayedColumns: string[] = [
    'empname',
    'department',
    'skill',
    'location',
    'experince',
    'appraisalStatus',
  ];
  dataSource = new MatTableDataSource();
  filteremp: String = ' ';
  role: number = 0;
  employeeList: any;
  filterByChoiceOptions: any[] = [];
  reportForm!: FormGroup;
  allListData!: any[];

  navigate = 'employeeList';
  faCirclePlus = faCirclePlus;
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly fb: FormBuilder,
    private readonly route: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getData().subscribe((response) => {
      console.log(response);
      this.allListData = response;
    });
    this.initForm();
  }

  initForm() {
    this.reportForm = this.fb.group({
      filterBy: [null, [Validators.required]],
      filterByChoice: [null, [Validators.required]],
    });
  }

  getEmployeeList() {
    this.employeeService.getData().subscribe((response) => {
      console.log(response);
      this.employeeList = response;
    });
  }

  onSubmit() {}

  addEmployee() {
    this.route.navigate(['./addEmployee']);
  }

  onDelete(id: any) {
    this.employeeService.deleteEmp(id).subscribe((data) => {
      window.location.reload();
    });
  }

  onSelelect(event: any) {
    let filterBy = event.source.value;
    console.log(event.isUserInput);

    if (event.isUserInput) {
      this.filterByChoiceOptions = [];
      this.allListData.forEach((element) => {
        if (filterBy == 'department') {
          if (!this.filterByChoiceOptions.includes(element.department)) {
            this.filterByChoiceOptions.push(element.department);
          }
        } else if (filterBy == 'location') {
          if (!this.filterByChoiceOptions.includes(element.location)) {
            this.filterByChoiceOptions.push(element.location);
          }
        } else if (filterBy == 'skill') {
          if (!this.filterByChoiceOptions.includes(element.skill)) {
            this.filterByChoiceOptions.push(element.skill);
          }
        } else if (filterBy == 'experince') {
          if (!this.filterByChoiceOptions.includes(element.experince)) {
            this.filterByChoiceOptions.push(element.experince);
          }
        } else if (filterBy == 'appraisalStatus') {
          if (!this.filterByChoiceOptions.includes(element.appraisalStatus)) {
            this.filterByChoiceOptions.push(element.appraisalStatus);
          }
        }
      });
    }
  }

  generateReport() {
    let payload = this.reportForm.getRawValue();
    if (payload.filterBy == 'department') {
      this.dataSource.data = this.allListData.filter(
        (data) => data.department == payload.filterByChoice
      );
    } else if (payload.filterBy == 'skill') {
      this.dataSource.data = this.allListData.filter(
        (data) => data.skill == payload.filterByChoice
      );
    } else if (payload.filterBy == 'location') {
      this.dataSource.data = this.allListData.filter(
        (data) => data.location == payload.filterByChoice
      );
    } else if (payload.filterBy == 'experince') {
      this.dataSource.data = this.allListData.filter(
        (data) => data.experince == payload.filterByChoice
      );
    } else if (payload.filterBy == 'appraisalStatus') {
      this.dataSource.data = this.allListData.filter(
        (data) => data.appraisalStatus == payload.filterByChoice
      );
    }
  }
}
