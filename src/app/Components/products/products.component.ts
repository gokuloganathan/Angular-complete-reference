import { Component } from '@angular/core';
import { catchError, of, Subject } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  //error from observable using rxjs 's subject act as observer
  //errorObserver$:Subject<String> = new Subject<String>();

  //also use above observable as observer when error emission
  //getEmittedError$ = this.errorObserver$.asObservable();

  //to get the asyncly data from api
  //catch to handle the error
  
 /*  products$ =  this._productService.getProducts$().pipe(
    catchError((err) => {
      this.errorObserver$.next(err.message);
      return of([]);
    })
  ); */


  products$ = this._productService.getProducts$();
  constructor(private _productService: ProductService){}
}
