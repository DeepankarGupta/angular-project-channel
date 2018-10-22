import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from 'src/app/models/article';
import { ArticleDataService } from 'src/app/article-data.service';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: IArticle;

  constructor(private articleDataService: ArticleDataService) { }

  ngOnInit() {
  }

  setAsFavourite() {
    this.articleDataService.setAsFavourite(this.article.slug)
      .subscribe(
        (data:{article: IArticle}) => {
          this.article = data.article
        },
        (error) => console.log(error)
      )
  }

  setAsUnfavourite() {
    this.articleDataService.setAsUnfavourite(this.article.slug)
      .subscribe(
        (data:{article: IArticle}) => {
          this.article = data.article
        },
        (error) => console.log(error)
      )
  }

}
