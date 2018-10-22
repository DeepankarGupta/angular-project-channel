import { Component, OnInit } from '@angular/core';
import { TagsService } from '../tags.service';
import { ArticleDataService } from '../article-data.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: string[]

  constructor(
    private tagService: TagsService,
    private articleDataService: ArticleDataService
  ) { }

  ngOnInit() {
    this.tagService.getTags().subscribe(
      (data: { tags: string[] }) => {
        this.tags = data.tags
      });
  }

  onTagSelection(tag) {
    this.tagService.setCurrentTag(tag);
    this.articleDataService.setFeed('tag',undefined,tag)
  }


}
