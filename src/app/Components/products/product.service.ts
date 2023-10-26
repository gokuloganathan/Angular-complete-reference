import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  URL:String = 'http://localhost:3000/products'
  constructor(private http: HttpClient) {}
  //private products$ !: Observable<any[]>

  /* ngOnInit() {
    this.products$ = this.http.get(this.URL).pipe(
      
    );
  } */

  getProducts$(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}`)   
    /* 'products' */
  }
  
}
