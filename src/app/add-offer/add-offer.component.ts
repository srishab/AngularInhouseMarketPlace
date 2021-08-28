import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {


    offer: Offer = new Offer();
  
    constructor(private offerService: OfferService,
      private router: Router) { }
  
    ngOnInit(): void {
    }
  
    //this method is used to save the details of the offers
    saveOffer(){
      this.offerService.addOffer(this.offer).subscribe(data =>{
        console.log(data);
        this.goToOfferList();
      },
      error => console.log(error));
    }
  
    //this method is used to nagivate to the list of details
    goToOfferList(){
      this.router.navigate(['/offers'])
  
    }
  
    //this method is used to submit the offer details and navigate to the offer list
    onSubmit(){
      console.log(this.offer);
      this.saveOffer();
    }
}
