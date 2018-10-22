import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleListItemComponent } from './articles/article-list/article-list-item/article-list-item.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ProfileComponent } from './profile/profile.component';
import { TagsComponent } from './tags/tags.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article/:slug', component: ArticleDetailsComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'editor', component: ArticleEditorComponent},
  { path: 'editor/:slug', component: ArticleEditorComponent},
  { path: 'profile/:username', component: ProfileComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleListComponent,
    ArticleListItemComponent,
    ArticleDetailsComponent,
    SignupComponent,
    SigninComponent,
    ArticleEditorComponent,
    ProfileComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
