import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Authentication/login/login.service';
import { Post } from './post';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root',
})
export class PostsGuard implements Resolve<Post[]> {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private postsService: PostsService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Post[] | Observable<Post[]> | Promise<Post[]> {
    return this.postsService.getAllPosts();
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginService.isAuthorized
      ? true
      : this.route.navigate(['/posts']);
  }
}
