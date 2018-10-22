import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  url = "https://conduit.productionready.io/api/tags";
  private currentTag = new BehaviorSubject<string>(null);
  currentTag$ = this.currentTag.asObservable()

  constructor(private http: HttpClient) { }

  getTags() {
    return this.http.get(this.url)
  }
  
  setCurrentTag(tag: string) {
    this.currentTag.next(tag);
  }

}
