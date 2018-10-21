import { Component, OnInit, OnDestroy } from '@angular/core';
import { IArticle } from 'src/app/models/article';
import { ArticleDataService } from 'src/app/article-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {
  articles: IArticle[]
  sub : Subscription

  constructor(private articleDataService: ArticleDataService) { }

  ngOnInit() {
    this.sub = this.articleDataService.articleFeed$.subscribe(
      (articles) => {this.articles = articles}
    );
    if(localStorage.getItem('JWT')!=null) {
      this.articleDataService.setFeed("user")
    } else {
      this.articleDataService.setFeed("global")
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



}
