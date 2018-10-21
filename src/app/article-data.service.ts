import { Injectable } from '@angular/core';
import { IArticle } from './models/article';
import { Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INewArticle } from './models/newArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  private articles = new Subject<IArticle[]>();
  articleFeed$ = this.articles.asObservable();
  baseUrl: string = "https://conduit.productionready.io/api/articles";
  
  constructor(private http: HttpClient) { }

  setFeed(source: string) {
    if(source === "global") {
      this.http.get(this.baseUrl).subscribe(
        (response:{articles: IArticle[], articlesCount: number}) => {
          this.articles.next(response.articles)
        });
    } else if(source === "user") {

      const httpOptions = {
        headers: new HttpHeaders({
          'authorization':  'Token ' + localStorage.getItem('JWT')
        })
      };
      this.http.get(`${this.baseUrl}/feed`,httpOptions).subscribe(
        (response:{articles: IArticle[], articlesCount: number}) => {
          this.articles.next(response.articles)
        });
    }
  }

  getArticle(slug: string) {
    return this.http.get(this.baseUrl + '/' + slug)
  }

  postArticle(newArticle: INewArticle) {
    let newArticleRequest = {
      article: newArticle
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization':  'Token ' + localStorage.getItem('JWT')
      })
    };
    return this.http.post(this.baseUrl,newArticleRequest,httpOptions)
  }

  updateArticle(article : INewArticle, slug: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': 'Token '+ localStorage.getItem('JWT')
      })
    };
    const updateArticleRequest = {
      article: article
    }
    return this.http.put(this.baseUrl + '/' + slug,updateArticleRequest,httpOptions)
  }



}

// pipe( 
//   tap((response:{articles: IArticle[], articlesCount: number}) => {
//     console.log(response);
//       this.articles.next(response.articles)
//     }),
//     catchError(error => {
//       console.log(error)
//       return null
//     })
// );