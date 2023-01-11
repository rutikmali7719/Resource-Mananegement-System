import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VisaServiceService } from 'src/app/services/visa-service.service';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { AddVisa } from 'src/app/model/add-visa';
import {
  faCirclePlus,
  faEye,
  faFilePen,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css']
})
export class VisaComponent implements OnInit{

searchId : string ="";
visa : any=[];
visaList: AddVisa[]=[];
visaDetail !: FormGroup;
visaobj : AddVisa = new AddVisa();
showAdd !:boolean;
showUpdate !: boolean;
faCirclePlus = faCirclePlus;
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  faEye=faEye

// EmpId : String;

  constructor(private formbuilder: FormBuilder ,private service : VisaServiceService,){}


  ngOnInit(): void {

    this.visaDetail = this.formbuilder.group({
      visaId : [''],
      transactionId : [''],
      empId : [''],
      visaNo : [''],
      dateOfAllowtment : [''],
      period : [''],
    });
    this.getAllVisa();
  }
  

 clickAddVisa(){
  this.visaDetail.reset();
  this.showAdd=true;
  this.showUpdate=false;
 }


  //addVisa
  addVisa() : any{
    console.log(this.visaDetail);
    this.visaobj.transactionId= this.visaDetail.value.transactionId;
    this.visaobj.empId= this.visaDetail.value.empId;
    this.visaobj.visaNo= this.visaDetail.value.visaNo;
    this.visaobj.dateOfAllowtment= this.visaDetail.value.dateOfAllowtment;
    this.visaobj.period= this.visaDetail.value.period;

   this.service.addVisa(this.visaDetail.value).subscribe(res=>{
    console.table(res);
    alert("Visa-details added successfully")
    let ref = document.getElementById("close")
    ref?.click();
    this.visaDetail.reset();
    this.getAllVisa();
   },err=>{
    alert("something went wrong")
    console.log(err);
    
   });
    
  }

  //viewAll
  getAllVisa(){
    this.service.viewAllVisa().subscribe((data)=>{
      this.visaList=data
      console.log(data);
      
    })
    
  }
  
  // delete
    public deleteVisa(data:any){
    this.service.deleteById(data.visaId).subscribe(data=>{console.log(data);
      alert('deleted successfully');
      this.getAllVisa();
   },
  error=> console.error(error));
}
  
  //updateVisa
  OnEdit(vi: any) {
    this.showAdd=false;
    this.showUpdate=true;
    this.visaobj.visaId = vi.visaId;

    this.visaDetail.controls['transactionId'].setValue(vi.transactionId);
    this.visaDetail.controls['empId'].setValue(vi.empId);
    this.visaDetail.controls['visaNo'].setValue(vi.visaNo);
    this.visaDetail.controls['dateOfAllowtment'].setValue(vi.dateOfAllowtment);
    this.visaDetail.controls['period'].setValue(vi.period);

  }
  updateVisaById() {
    this.visaobj.transactionId= this.visaDetail.value.transactionId;
    this.visaobj.empId= this.visaDetail.value.empId;
    this.visaobj.visaNo= this.visaDetail.value.visaNo;
    this.visaobj.dateOfAllowtment= this.visaDetail.value.dateOfAllowtment;
    this.visaobj.period= this.visaDetail.value.period;
    
    this.service.updateVisa(this.visaobj,this.visaobj.visaId).subscribe((res) => {
      alert("updated successfully");
      let ref = document.getElementById("close")
      ref?.click();
      this.visaDetail.reset();
      this.getAllVisa()
    })
  }


  //view
  getProjectById(view:any) {
    this.service.getVisaById(view.visa).subscribe((res) => {
      console.log(res); 
      this.visa = res;
    })
  }


  

//search
// SearchById(EmpId :any){
//   let searchstr = event.target.value;
//   if(searchstr.trim().length){
//     this.service.getSearchById(searchstr).subscribe(res=>{
//       this.addVisa=[res];
//     })
//   }
//   else{
//     this.addVisa= this.duplicationRequest;
//   }
// }
  



  //search (working)
  // res:any;
  // public SearchById(){
  //   this.service.SearchById(this.visa).subscribe((data:any)=>this.res=data) }

  
  //search
  // public SearchIByd(): any {
  //   this.visa = this.visa.filter(res=>{
  //     return res.filter.match(this.EmpId)
  //   })
  // }


//  search
    //  public SearchById(){
    //   let resp = this.service.SearchById(this.visa)
    //   resp.subscribe((data:any)=>this.visa=data.token);
  
    // }



    
  }
  


