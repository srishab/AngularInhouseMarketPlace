import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproposal } from '../iproposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  public proposals:Iproposal[]=[];
  p:number=1;
  constructor(private proposalService: ProposalService, private router: Router ) { }

  ngOnInit(): void {
   this.getProposal();
  }

  //Used to get the list of all the proposals present
  private getProposal(){
    this.proposalService.getAllProposal().subscribe
    (data => this.proposals =data);
  }

  //Used to delete the respective proposal for a given proposal Id
  deleteProposal(propId:number){
    this.proposalService.deleteProposal(propId).subscribe(data=>{
      console.log(data);
      this.getProposal();
    })
    // this.router.navigate(["proposal-list"]);
  }

  // proposalDetails(propId:number){
  //   this.router.navigate(['proposal-details',propId]);
  // }
  // getProposalListById(propId:number){
  //   this.router.navigate(['/proposals']);
  //}
}
