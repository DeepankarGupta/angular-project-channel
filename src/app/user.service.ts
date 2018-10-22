import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INewUser } from './models/newUser';
import { ILoginUser } from './models/loginUser';
import { IUser } from './models/user';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "https://conduit.productionready.io/api/users";
  currentUserUrl: string = "https://conduit.productionready.io/api/user";
  private currentUser = new BehaviorSubject<IUser>(null);
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient) { }

  register( newUser: {user: INewUser} ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.baseUrl,newUser,httpOptions)
  }


  login( loginUser: {user: ILoginUser} ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.baseUrl+"/login",loginUser,httpOptions)
  }

  setCurrentUser(user: IUser) {
    this.currentUser.next(user);
  }

  getCurrentUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization':  'Token ' + localStorage.getItem('JWT')
      })
    };
    return this.http.get(this.currentUserUrl,httpOptions)
  }
}
