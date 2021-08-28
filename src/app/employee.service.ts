import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:2021/getallemployee";
  private url1="http://localhost:2021/addemployee";
  private url2="http://localhost:2021/updateEmployee";
  private url3="http://localhost:2021/employebyid";
  private url4="http://localhost:2021/login";
  private url5="http://localhost:2021/logout";

  constructor(private httpclientt:HttpClient) { }

  //this service method is used to get the list of employee details
  getEmployeeList():Observable<Employee[]>
  {
    return this.httpclientt.get<Employee[]>(`${this.baseUrl}`);
  }

  //this service is used to add a new employee 
  createEmployee(employee:Employee):Observable<Object>
  {
      return this.httpclientt.post(`${this.url1}`,employee);
  }

  //this service is used to update an existing requirement
  updateEmployee(employee:Employee):Observable<Object>
  {
    return this.httpclientt.put(`${this.url2}`,employee);
  }

  getEmployeeById(id:number):Observable<Employee>
  {
      return this.httpclientt.get<Employee>(`${this.url3}/${id}`);
  }

  //service method used to login to the application 
  login(user:Users):Observable<Object>
  {
    return this.httpclientt.post(`${this.url4}`,user);
  }

  //service method used to logout of the application 
  logout():Observable<Object>
  {
    return this.httpclientt.get(`${this.url5}`);
  }
}
