import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css']
})
export class RequirementListComponent implements OnInit {

  requirements:  Requirement[];
  category: any;
  type: any;
  p: number=1;

  constructor(private  requirementService:  RequirementService,  
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getRequirements();
  
  }

  //this method is used to get the available requirements list
  private getRequirements(){
    this.requirementService.getRequirementList().subscribe(data => {
      this.requirements = data;
    })
  }

  //this method is used to navigate to the form to update an existing requirement
  updateRequirement(){
    this.router.navigate(['update-requirement']);
  }

  //this method is used to delete an existing requirement
  deleteRequirement(resId:number){
    this.requirementService.deleteRequirement(resId).subscribe (data => {
      console.log(data);
      this.getRequirements();
    })
  }

  //this method is used to search a requirement by its category
  Search(){
    if(this.category==""){
      this.ngOnInit();
    }
    else{
      this.requirements=this.requirements.filter( data =>{
        return data.category.toLocaleLowerCase()
        .match(this.category.toLocaleLowerCase());
      })
    }
  }

  //this method is used to search a requirement by its type
  Search1(){
    if(this.type==""){
      this.ngOnInit();
    }
    else{
      this.requirements=this.requirements.filter( data =>{
        return data.type.toLocaleLowerCase()
        .match(this.type.toLocaleLowerCase());
      })
    }
  }

  // updateRequirement(resId: number){
  //   this.router.navigate(['update-requirement', resId]);
  // }

}
