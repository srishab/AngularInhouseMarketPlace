import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resources } from './resources';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private baseURL= "http://localhost:2021//getAllResource";
  public resources : Resources[]=[];

  constructor(private httpClient: HttpClient) { }

  //this service method is used to get all the resources in a list
  getAllResource():Observable<Resources[]>{
    return this.httpClient.get<Resources[]>(`${this.baseURL}`);
  }
}
