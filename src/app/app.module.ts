import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleListItemComponent } from './articles/article-list/article-list-item/article-list-item.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article/:slug', component: ArticleDetailsComponent } 
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleListComponent,
    ArticleListItemComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
