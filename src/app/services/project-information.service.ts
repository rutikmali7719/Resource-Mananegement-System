import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectInformationService {

  constructor(private http: HttpClient) { }
  
  getAllProjects():Observable<any> {
    return this.http.get<any>("http://localhost:8082/api/projectInfo/viewAllProjectInformation")
  }

  addProject(data: any):Observable<any>{
    return this.http.post<any>("http://localhost:8082/api/projectInfo/addProjectInformation",data)
  }

  deleteProject(id: any): Observable<any>{
    return this.http.delete<any>("http://localhost:8082/api/projectInfo/deleteProjectInformation/"+id)
  }

  updateProject(data: any,id:any): Observable<any>{
    return this.http.put<any>("http://localhost:8082/api/projectInfo/updateProjectInformation/"+id,data)
  }

  getProjectById(id: any):Observable<any>{
    return this.http.get<any>("http://localhost:8082/api/projectInfo/viewProjectById/"+id)
  }

}