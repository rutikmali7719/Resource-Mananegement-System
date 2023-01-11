import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TrainingserviceService } from 'src/app/services/trainingservice.service';
import { UpdatetrainingComponent } from './updatetraining/updatetraining.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeService } from 'src/app/services/employee.service';




@Component({
  selector: 'app-training-information',
  templateUrl: './training-information.component.html',
  styleUrls: ['./training-information.component.css']
})
export class TrainingInformationComponent implements OnInit{

  displayedColumns: string[] = ['id', 'trainingName', 'trainingTechnology', 'noOfDays','startDate','endDate','action'];

  dataSource!: MatTableDataSource<any>;

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private dialog :MatDialog,private service:TrainingserviceService,
    private employee:EmployeeService
    ){}

  ngOnInit(): void {
    this.getInformations();
  }
  
  openDialog() {
    this.dialog.open(UpdatetrainingComponent, {

      width:'30%'
      
    }).afterClosed().subscribe(val=>{
      if(val ==='Save'){
        this.getInformations();
      }
    })
}

getInformations(){
  this.service.getInformation().subscribe({
    next:(res:any)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    },
    error:(err)=>{
      alert("error while fetching data");
    }
  })

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

updateInformation(row:any){
  this.dialog.open(UpdatetrainingComponent,{
    width:'30%' ,
    data:row 
  }).afterClosed().subscribe(val=>{
    if(val === 'Update'){
      this.getInformations();
    }
  })
}

updateNominees(empId:any){
  let emp:any
  for(let element of this.empList) {
    if(element.empId==empId){
     emp=element
    }
}
  this.service.updateNominees(emp,this.trasId).subscribe(res=>{
   console.log("Employee Add")
  })
}

deleteInformation(id:any){
  this.service.deleteById(id).subscribe({
    next:(res)=>{
      alert("Information deleted Sucessfully");
      this.getInformations();
    },
    error:()=>{
      alert("Error Occured!!");
    }
  })
}

openBox(){
  
}

empList:any=[];
trasId:any;

nominees(id:any){
  console.log(id)
  this.trasId=id
  this.employee.getData().subscribe(res=>{
    this.empList=res;
    
  })
}


}
