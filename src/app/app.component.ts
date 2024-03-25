import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import {Article} from "./article/article.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles: Article[];
  constructor(){
     this.articles = [
      new Article('Angular 2', 'https://angular.io', 3),
      new Article('Fullstack', 'https://fullstack.io', 2),
      new Article('Angular Homepage', 'https://angular.io', 1),
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value ='';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article)=> b.votes - a.votes);
  }

}
