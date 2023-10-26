import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostsGuard } from './posts.guard';

const routes: Routes = [
  {
    path: '',
    component:PostsComponent,
    canActivateChild:[PostsGuard],
    resolve:{
      posts:PostsGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
