import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.initialiseUserDetails()
  }

  initialiseUserDetails() {
    if (localStorage.getItem('JWT') !== null) {
      this.userService.getCurrentUser()
        .subscribe(
          (data: { user: IUser }) => {
            this.userService.setCurrentUser(data.user)
          })
    }
  }
}
