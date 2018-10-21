import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INewUser } from './models/newUser';

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
}
