import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Users=new Users();
  msg='';
  constructor(private employeeservice:EmployeeService,private route:Router) { }

  ngOnInit(): void {
  }

  public check()
  {
    this.employeeservice.login(this.user).subscribe(

      data=>{ console.log("Response Received");
      this.goToEmp();
    
    },
      error=>{
        console.log("error occured");
        this.msg="Invalid Credentials ! Please Enter the Valid Credentials";
      
      }


     )
  }
  public goToEmp()
  {
    this.route.navigate(['/getallemployee']);
  }
  onLogin()
  {
      this.check();
      
  }

}
