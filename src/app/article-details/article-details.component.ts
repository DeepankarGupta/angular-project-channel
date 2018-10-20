import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDataService } from '../article-data.service';
import { IArticle } from '../models/article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  slug: string
  article: IArticle

  constructor(private route: ActivatedRoute,
              private articleDataService: ArticleDataService) { }

  ngOnInit() {

    this.slug = this.route.snapshot.paramMap.get('slug')
    this.articleDataService.getArticle(this.slug).subscribe(
      (data:{article: IArticle}) => {
        this.article = data.article
      });

  }

}
