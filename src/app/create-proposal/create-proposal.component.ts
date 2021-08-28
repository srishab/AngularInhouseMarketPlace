import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproposal } from '../iproposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {

  proposals:Iproposal = new Iproposal();
  constructor(private proposalService: ProposalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //Used to save the proposal details that is to be added
  saveProposal(){
    this.proposalService.createProposal(this.proposals).subscribe(data => {
      console.log(data);
      
    },
    error => console.log(error));
  }

  // Navigates to the list of the proposal page
  goToProposalList(){
    this.router.navigate(['/proposals']);
  }

  // On submitting the submit button, the proposal gets 
  // saved and will navigate to the proposal list page after being added to the list
  onSubmit(){
    console.log(this.proposals);
    this.saveProposal();
    this.goToProposalList();
  }

}
