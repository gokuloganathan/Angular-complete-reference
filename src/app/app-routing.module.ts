import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authentication/auth.guard';
import { LoginComponent } from './Authentication/login/login.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },

  //w/o lazy loaded module products
  //{path:'products',component:ProductsComponent}

  //lazy loading products manually
  //step 1 : create module using ng g module
  //step 2 : ng g c for creating component
  //step 3 : configure routes in created module
  //step 4 : create the startement below

  //canLoad is used for lazy loaded modules to get loaded only if routegaurd allows users after auth
  {
    path: 'products',
    loadChildren: () =>
      import('./Components/products/product.module').then(
        (m) => m.ProductModule
      ),
  /*   canActivate: [AuthGuard],
    canLoad: [AuthGuard], */
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./Components/wishlist/wishlist.module').then(
        (m) => m.WishlistModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },

  //fully cli configured lazy module - mostly practized one
  {
    path: 'shipping',
    loadChildren: () =>
      import('./Components/shipping/shipping.module').then(
        (m) => m.ShippingModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },

  {
    path: 'myorders',
    loadChildren: () =>
      import('./Components/orders/orders.module').then((m) => m.OrdersModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'myprofile',
    loadChildren: () =>
      import('./Components/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./Components/posts/posts.module').then((m) => m.PostsModule),
  /*   canActivate: [AuthGuard],
    canLoad: [AuthGuard],  */
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


//13:42