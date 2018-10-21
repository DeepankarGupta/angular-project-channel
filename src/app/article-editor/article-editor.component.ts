import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { ArticleDataService } from '../article-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IArticle } from '../models/article';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  articleForm: FormGroup
  slug: string

  constructor(
    private formBuilder: FormBuilder,
    private articleDataService: ArticleDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])],
      tagList: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

    this.slug = this.route.snapshot.paramMap.get('slug')

    if (this.slug != null) {
      this.articleDataService.getArticle(this.slug).subscribe(
        (data: { article: IArticle }) => {
          this.articleForm.setValue(
            {
              title: data.article.title,
              description: data.article.description,
              body: data.article.body,
              tagList: data.article.tagList
            })
        });
    }

  }

  onSubmit() {
    
    if (this.slug == null) {
      this.articleDataService.postArticle(this.articleForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['/home'])
          });
    } else {
      this.articleDataService.updateArticle(this.articleForm.value, this.slug)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['/home'])
          });
    }
  }

}
