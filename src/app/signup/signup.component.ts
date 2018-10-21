import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { IUser } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  validationMessages = {
    'username': [
      { type: 'required', message: 'username is required' }
    ],
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
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    let newUserRequest = {
      user: this.registerForm.value
    }
    this.userService.register(newUserRequest)
      .subscribe(
        (data: IUser) => {
          this.router.navigate(['/home']);
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.serverSideErrors = error.error.errors
        });
  }

}
