import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  offer: Offer = new Offer();

  constructor(private offerService: OfferService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  //this method is used to save the updated offer in the list
  saveOffer(){
    this.offerService.updateOffer( this.offer).subscribe(data =>{
      console.log(data);
      this.goToOfferList();
    },
    error => console.log(error));
  }

  //this method is used to navigate to the offer list
  goToOfferList(){
    this.router.navigate(['/offers'])

  }

  //this method is used to submit the updated value of an existing offer
  onSubmit1(){
    this.offerService.updateOffer( this.offer).subscribe( data =>{
      this.goToOfferList();
    },
     error => console.log(error));
  }
}
