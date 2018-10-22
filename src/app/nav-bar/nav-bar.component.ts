import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username: string
  get isLoggedIn(): boolean {
    return (localStorage.getItem('JWT')!==null)
  }
  
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.currentUser$
      .subscribe(
        (user:IUser) => {
          this.username = user.username;
        })
    }

}
