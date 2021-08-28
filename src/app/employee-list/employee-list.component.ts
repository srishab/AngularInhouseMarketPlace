import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];
  constructor(private employeeservice:EmployeeService,private route:Router) { }

  ngOnInit(): void {
    this.getEmployees();
        
      }
   //this method is used to get the list of all the employees
      private getEmployees()
      {
        this.employeeservice.getEmployeeList().subscribe(data =>
          {
            this.employees=data;
          });
      }

      //this method is used to navigate to the update employee page
      updateEmployee()
      {
        this.route.navigate(['/updateEmployee']);
      }

}
