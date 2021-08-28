import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private employeeservice:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  //this method is used to save newly add employees
  public saveEmployee()
  {
    this.employeeservice.createEmployee(this.employee).subscribe(data=>
      {

        console.log(data);
        
      });
  }

  //this method is used to navigate to the employee list
  public goToEmp()
  {
    this.router.navigate(['/getallemployee']);
  }

  //this method is used to submit the employee
  public onSubmit()
  {
    console.log(this.employee);
    this.saveEmployee();
    this.goToEmp();
  }

}
