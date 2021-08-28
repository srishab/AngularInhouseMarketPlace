import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private employeeservice:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  //this method is used to update an existing employee details
 UpdateEmpl()
  {
    this.employeeservice.updateEmployee(this.employee).subscribe(

      data=>
      {
        console.log(data);
      }
    );
      
  }
  //this method is used to navigate to the employee list
  public goToEmp()
  {
    this.router.navigate(['/getallemployee']);
  }

  //this is the update button, used to update an employee details
  public onUpdate()
  {
    this.UpdateEmpl();
    this.goToEmp();
  }

}
