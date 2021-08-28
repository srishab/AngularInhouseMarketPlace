import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-update-requirement',
  templateUrl: './update-requirement.component.html',
  styleUrls: ['./update-requirement.component.css']
})
export class UpdateRequirementComponent implements OnInit {

    requirement: Requirement = new Requirement();
    constructor(private requirementService: RequirementService,
      private route: ActivatedRoute,
      private router: Router) { }
  
      ngOnInit(): void {
       
      }
  
      //this method is used to save the updated requirement in the list
      saveRequirement(){
        this.requirementService.updateRequirement( this.requirement).subscribe(data =>{
          console.log(data);
          this.goToRequirementList();
        },
        error => console.log(error));
      }

      //this method is used to submit the updated value of an existing requirement
      onSubmit(){
        this.requirementService.updateRequirement(this.requirement).subscribe( data =>{
          this.goToRequirementList();
        },
         error => console.log(error));
      }
    
      //this method is used to navigate to the requirement list
      goToRequirementList(){
        this.router.navigate(['/requirements']);
      }
    }


