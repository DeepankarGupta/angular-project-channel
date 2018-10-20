import { Component, OnInit, Input } from '@angular/core';
import { ArticleDataService } from '../article-data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private articleDataService: ArticleDataService) { }

  ngOnInit() {
   
  }

}
