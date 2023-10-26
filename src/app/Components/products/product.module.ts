import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AngularMaterialModule } from 'src/app/Material/angular-material/angular-material.module';



@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,/* 
    HttpClientModule, */
    ProductRoutingModule,
    AngularMaterialModule
  ]
})
export class ProductModule { }
