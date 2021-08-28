import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  users: Users = new Users();
   constructor(private usersService: UsersService,
   private router: Router) { }

  ngOnInit(): void {
  }

  //this method is used to save the details of the users.
  saveUsers(){
    this.usersService.addUser(this.users).subscribe(data =>{
      console.log(data); 
    },
      error => console.log(error));
  }

  //this method is used to nagivate to the list of details
  goToUsersList(){
    this.router.navigate(['/users']);
  }

  //this method is used to submit the user details and navigate to the user list
  onSubmit(){
    console.log(this.users);
    this.saveUsers();
    this.goToUsersList();
  }

}
