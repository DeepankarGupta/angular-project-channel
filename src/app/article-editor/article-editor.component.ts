import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { ArticleDataService } from '../article-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  articleForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private articleDataService: ArticleDataService,
    private router: Router
  ) {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])],
      tagList: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.articleDataService.postArticle(this.articleForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/home'])
        });
  }

}
