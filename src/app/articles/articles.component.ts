import { Component, OnInit, Input } from '@angular/core';
import { ArticleDataService } from '../article-data.service';
import { IUser } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  get isLoggedIn(): boolean {
    return (localStorage.getItem('JWT') !== null)
  }

  constructor(
    private articleDataService: ArticleDataService,
  ) { }

  ngOnInit() {

  }

  getFeed(source: string) {
    if (source === "user") {
      this.articleDataService.setFeed("user");
    } else if (source === "global") {
      this.articleDataService.setFeed("global")
    }
  }

}
