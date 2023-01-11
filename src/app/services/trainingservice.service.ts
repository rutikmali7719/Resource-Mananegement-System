import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TrainingserviceService {
  

  // public addTrURL : string ;
   constructor(private http:HttpClient) { }
  //   this.addTrURL ="http://localhost:9131/addInformation" ;
  // }


  addNewInformation(data: any){
    return this.http.post<any>("http://localhost:8084/addInformation",data);
  }
     getInformation(){
      return this.http.get<any>("http://localhost:8084/viewAllInformation");
    }
    public deleteById(id: any){
      return this.http.delete<any>("http://localhost:8084/deleteInformation/"+id);
    }
    // public addInformation(){
    //   return this.http.delete("http://localhost:9131/addInformation");
    // }
    public viewAllInformationByTech(trainingTechnology:any){
      return this.http.get("http://localhost:8084/viewAllInformationByTech/"+trainingTechnology);
    }

    updateInformation(data: any,id:any){
      return this.http.put<any>("http://localhost:8084/updateInformation/"+id,data)
    }

    updateNominees(data: any,id:any){
      return this.http.put<any>("http://localhost:8084/nomineeEmployee/"+id,data)
    }
    
  } 