import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { IUser } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  validationMessages = {
    'email': [
      { type: 'required', message: 'email is required' },
      { type: 'email', message: 'enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'password is required' }
    ]
  }
  serverSideErrors: any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    let loginUserRequest = {
      user: this.loginForm.value
    }
    this.userService.login(loginUserRequest)
      .subscribe(
        (response: {user: IUser}) => {
          localStorage.setItem('JWT',response.user.token)
          this.router.navigate(['/home']);
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.serverSideErrors = error.error.errors
        });
  }
 
}
