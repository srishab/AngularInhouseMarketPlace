import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: Users[]=[];
  userId: any[string] =[];

  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  //this method is used to get the users List 
    private getUsers(){
      this.usersService.getUsersList().subscribe(data => {
        this.users = data;
      });
  }
  
  //this method is used to update an existing user 
  updateUsers(userId: String){
    this.router.navigate(['update-users', userId]);
  }

  //this method is used to delete a particular user
  deleteUser(userId : String){
    this.usersService.deleteUser(userId).subscribe( data => {
      console.log(data);
      this.getUsers();
      
    })
  }
}
