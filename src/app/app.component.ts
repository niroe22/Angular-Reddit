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
      new Article('Angular 2', 'http//angular.io', 3),
      new Article('Fullstack', 'http//fullstack.io', 2),
      new Article('Angular Homepage', 'http//angular.io', 1),
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }

}
