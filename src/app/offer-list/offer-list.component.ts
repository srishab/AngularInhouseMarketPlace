import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  offers: Offer[];
  resId: number;
  category: any;
  type: any;
  p: number=1;

  constructor(private offerService: OfferService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOffers();
  }

  //this method is used to get the available offers list
  private getOffers(){
    this.offerService.getOfferList().subscribe(data => {
      this.offers = data;
    });
  }

  //this method is used to navigate to the form to update an existing offer
  updateOffer(){
    this.router.navigate(['update-offer']);
  }

  //this method is used to delete an existing offer
  deleteOffer(resId:number){
    this.offerService.deleteOffer(resId).subscribe (data => {
      console.log(data);
      this.getOffers();
    })
    //this.router.navigate(["offer-list"]);
  }

  //this method is used to search a offer by its category
  Search(){
    if(this.category==""){
      this.ngOnInit();
    }
    else{
      this.offers=this.offers.filter( data =>{
        return data.category.toLocaleLowerCase()
        .match(this.category.toLocaleLowerCase());
      })
    }
  }

  //this method is used to search a offer by its type
  Search1(){
    if(this.type==""){
      this.ngOnInit();
    }
    else{
      this.offers=this.offers.filter( data =>{
        return data.type.toLocaleLowerCase()
        .match(this.type.toLocaleLowerCase());
      })
    }
  }

}
