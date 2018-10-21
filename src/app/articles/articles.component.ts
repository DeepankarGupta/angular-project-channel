import { Component, OnInit, Input } from '@angular/core';
import { ArticleDataService } from '../article-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() parent;
  get isLoggedIn(): boolean {
    return (localStorage.getItem('JWT') !== null)
  }

  constructor(
    private route: ActivatedRoute,
    private articleDataService: ArticleDataService
  ) { }

  ngOnInit() {
     if (this.parent == "home" && localStorage.getItem('JWT') !== null) {
      this.articleDataService.setFeed("user");
    } else if (this.parent == "home") {
      this.articleDataService.setFeed("global")
    } else if (this.parent == "profile") {
      let username = this.route.snapshot.paramMap.get('username')
      this.articleDataService.setFeed("self", username)
    }
  }

  getFeed(source: string) {
    let username = this.route.snapshot.paramMap.get('username')
    this.articleDataService.setFeed(source, username)
  }

}
