import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { filter, map, Observable, pipe, pluck, tap } from 'rxjs';
import { Post } from './post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  //fetching from service
  posts$ = this.postService.getAllPosts();

  //pre-fetching even before template gets rendered using resolver
  //@depreciated
  //preFetchedPosts$ = this.activatedRoute.data.pipe(pluck('posts'))

  //instaed
  preFetchedPosts$ = this.activatedRoute.data.pipe(map(data => data['posts']));

  ngOnInit() {
    //const helo$ : Observable<Data>

    console.log(this.preFetchedPosts$);

    //demo$.forEach((r) => console.log(r))
    //demo$.pipe(map((r) => console.log(r)))
    //demo$.pipe(tap((r) => console.log(r)));
    //_value
  }

  constructor(
    private postService: PostsService,
    private responsive: BreakpointObserver,
    private activatedRoute: ActivatedRoute
  ) {}
  /* this.postService.getAllPosts().subscribe({
      next:(res)=>{
        this.posts = res;
        console.log(res);
        
      }
    }) */

  //or
}
