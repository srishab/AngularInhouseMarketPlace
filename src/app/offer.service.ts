import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private baseURL = "http://localhost:2021/getalloffers";
  private URL1 = "http://localhost:2021/addoffer";
  private URL2 = "http://localhost:2021/updateoffer";
  private URL3 = "http://localhost:2021//deleteoffer";

  constructor(private httpClient: HttpClient) { }

  //this service is used to get all the available offers in a list format
  getOfferList(): Observable<Offer[]>{
    return this.httpClient.get<Offer[]>(`${this.baseURL}`)
  }

  //this service is used to add a new offer by using a form
  addOffer(offer: Offer): Observable<Object>{
    return this.httpClient.post(`${this.URL1}`, offer);
  }

  //this service is used to update an existing offer by using a form
  updateOffer( offer: Offer): Observable<any>{
    return this.httpClient.put(`${this.URL2}`, offer);
  }

  //this service is used to delete a offer 
  deleteOffer(resId: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL3}/${resId}`);
  }
}
