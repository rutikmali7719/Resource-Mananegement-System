import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authrizedUser: boolean = false;
  error:boolean= false;
  loginForm: FormGroup = this.fb.group({
    email: [null],
    password: [null],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly empService: EmployeeService,
    private readonly router: Router
  ) {}
  ngOnInit( ): void {
   
  }

  onSubmit() {
    let payload = this.loginForm.getRawValue();
    console.log(payload);
    this.empService.login(payload).subscribe((data) => {
      console.log(data);
      this.authrizedUser = data;
      if(this.authrizedUser ) {
        this.error = false;
        if( payload.email === 'admin@gmail.com')
        this.router.navigate(['/employeeList'], { queryParams: {userType: 'admin'}})
        else
        this.router.navigate(['/addEmployee'], { queryParams: {userType:payload.email}})
      }
      else {
          this.error = true;
      }
    });
  }
}
