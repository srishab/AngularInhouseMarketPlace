import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproposal } from './iproposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

private baseURL= "http://localhost:2021/getall";
private URL1="http://localhost:2021/addProposal";
private URL2="http://localhost:2021/proposal";
private URL3="http://localhost:2021//deleteproposal/";

public proposals:Iproposal[]=[];

  constructor(private httpClient: HttpClient) { }

  // getProposalListById(propId:number): Observable<Iproposal[]>{
  //   return this.httpClient.get<Iproposal[]>(`${this.URL2}/${propId}`);
  // }
  
  //Adding proposals for a specific EmployeeId and ResourceId
  createProposal(proposals: Iproposal):Observable<Object>{
return this.httpClient.post(`${this.URL1}`, proposals);
  }
   
  //Deleting proposals for a specific proposalId
  deleteProposal(propId: number):Observable<Object>{
    return this.httpClient.delete(`${this.URL3}/${propId}`);
  }

  //Getting all the proposals present in the list 
  getAllProposal():Observable<Iproposal[]>{
    return this.httpClient.get<Iproposal[]>(`${this.baseURL}`);
  }
}
