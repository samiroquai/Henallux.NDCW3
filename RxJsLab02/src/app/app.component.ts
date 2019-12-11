import { Component, OnInit } from '@angular/core';
import { SummarizedBlogEntry } from './Model/SummarizedBlogEntry';
import { HttpClient } from '@angular/common/http';
import { Post } from './Model/Post';
import { map, flatMap, concatMap, toArray } from 'rxjs/operators'
import { Author } from './Model/Author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'RxJsLab02 - combination operators';
  blogData: SummarizedBlogEntry[] = [];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .pipe(
        concatMap(post => post),
        flatMap(post => this.httpClient.get<Author>(`https://jsonplaceholder.typicode.com/users?id=${post.userId}`), (post, author) => {
          const blogEntry: SummarizedBlogEntry = {
            title: post.title,
            author: author[0].name
          }
          return blogEntry;
        }),
      )
      .subscribe(posts => this.blogData.push(posts));
  }
}
