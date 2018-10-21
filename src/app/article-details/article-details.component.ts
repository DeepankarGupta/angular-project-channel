import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDataService } from '../article-data.service';
import { IArticle } from '../models/article';
import { IUser } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  slug: string
  article: IArticle
  currentUser: IUser
  isLoggedIn: boolean

  constructor(
    private route: ActivatedRoute,
    private articleDataService: ArticleDataService,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.isLoggedIn = localStorage.getItem('JWT')!==null ? true:false
    
    this.userService.currentUser$
      .subscribe(
        (currentUser: IUser) => {
          this.currentUser = currentUser
        });

    this.slug = this.route.snapshot.paramMap.get('slug')
    this.articleDataService.getArticle(this.slug).subscribe(
      (data: { article: IArticle }) => {
        this.article = data.article
      });

  }

}
