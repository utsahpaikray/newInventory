import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  user: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUsers()

  }
  getAllUsers(){
    this.userService.getAllUser().subscribe(res=>{
      console.log(res)
      this.users=res;
    })
  }
  getUser(id:string){
    this.userService.getUser(id).subscribe(res=>{
      this.user=res;
    })
  }

}
