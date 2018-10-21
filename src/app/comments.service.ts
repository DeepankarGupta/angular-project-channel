import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl: string = 'https://conduit.productionready.io/api/articles/';
  
  constructor(private http: HttpClient) { }

  getComments(slug: string) {
    const url = this.baseUrl + slug + '/comments'
    return this.http.get(url)
  }

}
