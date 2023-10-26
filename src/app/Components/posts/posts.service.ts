import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsURL: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) {

  }

  getAllPosts(){
    return this.http.get<Post[] | any[]>(this.postsURL);
  }

}
