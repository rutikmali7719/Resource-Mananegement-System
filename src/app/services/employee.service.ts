import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  href = 'http://localhost:8081';

  getData(): Observable<any> {
    return this.http.get<any>(this.href + '/getAllEmployeeDetails');
  }

  getEmplyee(id: any): Observable<any> {
    return this.http.get<any>(this.href + `/getEmployeeDetailsById/${id}`);
  }

  updateEmp(payload : any,empId:any) {
    return this.http.put<any>(this.href + `/updateEmployeeDetailsById/${empId}`,payload);
  }

  createEmp(payload:any) {
    return this.http.post<any>(this.href + `/addEmployeeDetails`,payload);
  }

  deleteEmp(id:any): Observable<any>{
    return this.http.delete<any>(this.href + `/deleteEmployeeDetailsById/${id}`);
  }
   
  login(payload: any) {
    return this.http.post<any>(this.href + `/login`,payload);
  }

  getEmployeeByEmail(email: any) {
    return this.http.post<any>(this.href + `/viewEmployeeLogin`,email);
  }
  getDataByFilter(filterBy:string): Observable<any> {

    return this.http.get<any>(this.href + `/getEmployeeBy${filterBy}`)
  }
}
