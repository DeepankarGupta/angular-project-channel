import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url : string = "https://conduit.productionready.io/api/profiles/"

  constructor(private http: HttpClient) { }

  getUserProfile(username:string) {
    return this.http.get(this.url+username)
  }
}
