import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Material/angular-material/angular-material.module';
import { HomeComponent } from './Components/home/home.component';
import { AuthModule } from './Authentication/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestsInterceptor } from './Interceptors/requests.interceptor';
import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
    ,/* 
    PostsModule,
    AuthModule,
    WishlistModule,
    OrdersModule,
    ShippingModule,
    ProfileModule */
    /* 
    OrdersModule, */
    //active loading of products , for lazy loading refer roting module 
    //ProductModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestsInterceptor,
      multi:true
    },
    {
      provide:ErrorHandler,
      useClass:GlobalErrorHandler,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
