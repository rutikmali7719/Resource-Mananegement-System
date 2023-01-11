import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AddVisa } from '../model/add-visa';

@Injectable({
  providedIn: 'root'
})
export class VisaServiceService  {

 public addEmpURL : string ;
 

 constructor(private http :HttpClient){ 
  this.addEmpURL ="http://localhost:8083/addVisa" ;
 }

 

//addVisa
addVisa(vis : AddVisa ):Observable<AddVisa>{
  return this.http.post<AddVisa>(this.addEmpURL,vis);
  }
  
//viewAll visa details
viewAllVisa():Observable<any>{
  return this.http.get<any>(`http://localhost:8083/viewAllVisa`);
  }

//delete
public deleteById(empId: any):Observable<any>{
  return this.http.delete("http://localhost:8083/deleteById/"+ empId);
}

//updates
updateVisa(data: any,empId:any): Observable<any>{
  return this.http.put<any>("http://localhost:8083/updateById/"+ empId,data)
}


getVisaById(EmpId: any):Observable<any>{
  return this.http.get<any>("http://localhost:8083/viewById/"+EmpId)
}



}

