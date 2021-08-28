import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {

  userId: string;
  users: Users = new Users();
  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
  
    //this is used to update an existing user
    this.usersService.updateUser(this.userId, this.users).subscribe(data =>{
      console.log(data);
      this.goToUsersList();
    },
      error => console.log(error));
  }
    
//this is used to submit an updated user
  onSubmit(){
    this.usersService.updateUser(this.userId, this.users).subscribe( data =>{
      this.goToUsersList();
    },
     error => console.log(error));
  }

  //this is used to navigate to the users list
  goToUsersList(){
    this.router.navigate(['/users']);
  }
}
