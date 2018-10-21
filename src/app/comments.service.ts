import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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

  createComment(newComment: string, slug: string) {
    const url = this.baseUrl + slug + '/comments'
    const newCommentRequest = {
      comment: {
        body: newComment
      }
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Token ' + localStorage.getItem('JWT')
      })
    };
    return this.http.post(url, newCommentRequest, httpOptions)
  }

}
