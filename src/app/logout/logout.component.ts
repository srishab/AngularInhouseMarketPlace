import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private employeeservice:EmployeeService,private route:Router) { }

  ngOnInit(): void {
  }

  goHome()
  {
      this.route.navigate(['/resources'])
  }

  goLogin()
  {
    this.route.navigate(['/login'])
  }

  onLogout()
  {
    this.employeeservice.logout().subscribe(

     data=> 
          this.goLogin(),
      )  }
}
