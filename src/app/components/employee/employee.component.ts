import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgModel } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'NAME', 'EMAIL','CONTACT','DEPARTMENT','ACTION'];
  dataSource = new MatTableDataSource();
  filteremp:String=" ";
  role:number=0;
  employeeList: any;
  
  navigate = 'employeeList'
  faCirclePlus = faCirclePlus;
  constructor(private readonly employeeService:EmployeeService,
    private readonly route:Router
   ){
  }
  
  ngOnInit(): void {
    this.employeeService.getData().subscribe((response)=>{ 
      console.log(response);
      this.dataSource=response
     })
  }


  getEmployeeList(){
    this.employeeService.getData().subscribe((response)=>{ 
      console.log(response);
      this.employeeList=response
      
     })
  } 

  filterempMethod(value:any){

  }

  addEmployee(){
    this.route.navigate(['./addEmployee'], { queryParamsHandling: 'preserve' })
    
  }

  onDelete(id:any) {
    this.employeeService.deleteEmp(id).subscribe(data=>{
      window.location.reload()
    })
  }
  
}
