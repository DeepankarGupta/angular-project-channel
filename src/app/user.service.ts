import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INewUser } from './models/newUser';
import { ILoginUser } from './models/loginUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "https://conduit.productionready.io/api/users";

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
}
