import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resources } from '../resources';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  public resources:Resources[]=[];
  constructor(private resourcesService: ResourcesService, private router: Router ) { }

  ngOnInit(): void {
    this.getResource();
  }

  private getResource(){
    this.resourcesService.getAllResource().subscribe
    (data => this.resources =data);
  }

}
