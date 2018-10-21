import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  complete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private articleDataService: ArticleDataService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

    this.isLoggedIn = localStorage.getItem('JWT') !== null ? true : false

    this.userService.currentUser$
      .subscribe(
        (currentUser: IUser) => {
          this.currentUser = currentUser
        });

    this.slug = this.route.snapshot.paramMap.get('slug')
    this.articleDataService.getArticle(this.slug).subscribe(
      (data: { article: IArticle }) => {
        this.article = data.article
        this.complete = true;
      });

  }

  deleteArticle() {
    this.articleDataService.deleteArticle(this.slug)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/home'])
      })
  }

}
