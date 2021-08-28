import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL1 = "http://localhost:2021/getallusers";
  private baseURL = "http://localhost:2021/addUser";
  private URL2 = "http://localhost:2021/updateUser";
  private URL3 = "http://localhost:2021/deleteUser/"

  constructor(private httpClient : HttpClient) { }

  //this is the service method used to get all the users in a list
  getUsersList(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.URL1}`);
  }

  //this is the service method used to add new users
  addUser(users: Users): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,users);
  }

  //this service method used to update an existing user
  updateUser(userId: String, users: Users): Observable<Object>{
    return this.httpClient.put(`${this.URL2}`, users);
  }

  //this service method used to delete a particular user
  deleteUser(userId: String): Observable<Object>{
    return this.httpClient.delete(`${this.URL3}/${userId}`);
  }
}
