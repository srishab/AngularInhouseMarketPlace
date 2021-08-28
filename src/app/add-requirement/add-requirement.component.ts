import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class AddRequirementComponent implements OnInit {

  requirement: Requirement = new Requirement();

  constructor(private requirementService: RequirementService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //this method is used to save the details of the requirements
  saveRequirement(){
    this.requirementService.addRequirement(this.requirement).subscribe(data =>{
      console.log(data);
      this.goToRequirementList();
    },
    error => console.log(error));
  }

  //this method is used to nagivate to the list of details
  goToRequirementList(){
    this.router.navigate(['/requirements'])

  }

  //this method is used to submit the requirement details and navigate to the requirement list
  onSubmit(){
    console.log(this.requirement);
    this.saveRequirement();
    this.goToRequirementList();
  }


}
