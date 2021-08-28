import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from './requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  private baseURL = "http://localhost:2021/getallreqs";
  private URL1 = "http://localhost:2021/addRequirement";
  private URL2 = "http://localhost:2021/updatereq";
  private URL3 = "http://localhost:2021/deletereq";


 constructor(private httpClient: HttpClient) { }

 //this service is used to get all the available requirements in a list format 
  getRequirementList(): Observable<Requirement[]>{
    return this.httpClient.get<Requirement[]>(`${this.baseURL}`)
  }

  //this service is used to add a new requirement by using a form
  addRequirement(requirement: Requirement): Observable<Object>{
    return this.httpClient.post(`${this.URL1}`, requirement);
  }

  //this service is used to update an existing requirement by using a form
  updateRequirement(requirement: Requirement): Observable<any>{
    return this.httpClient.put(`${this.URL2}`, requirement);
  }

  //this service is used to delete a requirement 
  deleteRequirement(resId: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL3}/${resId}`);
  }
}
