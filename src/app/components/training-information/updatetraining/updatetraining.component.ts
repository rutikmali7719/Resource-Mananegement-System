
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { TrainingserviceService } from 'src/app/services/trainingservice.service';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'


@Component({
  selector: 'app-updatetraining',
  templateUrl: './updatetraining.component.html',
  styleUrls: ['./updatetraining.component.css']
})
export class UpdatetrainingComponent implements OnInit {


  trainingForm !: FormGroup;
  actionBtn :String = "Save"


  constructor(private formBuilder:FormBuilder,
    private service:TrainingserviceService,

    private dialogref:MatDialogRef<UpdatetrainingComponent>,

    @Inject(MAT_DIALOG_DATA) public updateData:any){}


  ngOnInit(): void {
    this.trainingForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      trainingName: ['', [Validators.required]],
      trainingTechnology: ['', [Validators.required]],
      noOfDays: ['', [Validators.required]],
      startDate:['',[Validators.required]],
      endDate:['',Validators.required]
    });
    
    if(this.updateData){

      this.actionBtn = "Update";
      this.trainingForm.controls['id'].setValue(this.updateData.id);
      this.trainingForm.controls['trainingName'].setValue(this.updateData.trainingName);
      this.trainingForm.controls['trainingTechnology'].setValue(this.updateData.trainingTechnology);
      this.trainingForm.controls['noOfDays'].setValue(this.updateData.noOfDays);
      this.trainingForm.controls['startDate'].setValue(this.updateData.startDate);
      this.trainingForm.controls['endDate'].setValue(this.updateData.endDate);
    }
  }

  //addInformation


  addInformation() {
    if(!this.updateData){
      if(this.trainingForm.valid){
        this.service.addNewInformation(this.trainingForm.value)
        .subscribe({
          next:(res)=>{
            alert("Information added Succesfully");
            this.trainingForm.reset();
            this.dialogref.close('Save')
          }
        })
      
      }
    }else{
        this.updateTraining()
      }
    }

    //updateTraining Information


    updateTraining(){
      this.service.updateInformation(this.trainingForm.value,this.updateData.id)
      .subscribe({
        next:(res:any)=>{
          alert("updated successfully");
          this.trainingForm.reset();
          this.dialogref.close("Update");
        },
        error:()=>{
          alert("Error while update the information!!");
        }
      })

    }

  }