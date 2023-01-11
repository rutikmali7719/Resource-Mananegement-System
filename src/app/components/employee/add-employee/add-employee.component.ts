import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeDetail!: FormGroup;
  isNew = true;
  hide = true;
  userType:any;
  empId:any;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly empService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.userType = params.userType
      this.isNew = true;
      if (params.id ) {
        this.empId=params.id
        this.isNew = false;
        this.empService.getEmplyee(params.id).subscribe((data) => {
          this.employeeDetail.patchValue(data);
        });
      }
      
      if(params.userType != 'admin') {
        this.empService.getEmployeeByEmail(params.userType).subscribe((data) => {
          this.employeeDetail.patchValue(data);
          console.log(data);
          
        });
      }
    });

    this.employeeDetail = this.fb.group({
      empname: [null],
      email: [null],
      password: [null],
      phoneNo: [null],
      address: [null],
      birthDate: [null],
      department: [null],
      salary: [null],
      skill: [null],
      location: [null],
      experince:[null],
      adhaarNo: null,
      appraisalStatus:[null]
    });
  }

  onSubmit() {
    let payload = this.employeeDetail.getRawValue();
    console.log(payload);
    this.isNew ? this.create(payload) : this.update(payload);
  }

  update(payload: any) {
    this.empService.updateEmp(payload,this.empId).subscribe((data) => {});
    console.log(payload);
    console.log("update");
    window.location.reload()
    alert("Employee Details Update Successfully")
  //  window.location.replace('/employeeList')

  }

  create(payload: any) {
    this.empService.createEmp(payload).subscribe((data) => {});
    window.location.reload()
    alert("Employee Details Added Succesfully")
    // window.location.replace('/employeeList')



  }

  
}
