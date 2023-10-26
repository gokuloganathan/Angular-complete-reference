import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { AngularMaterialModule } from 'src/app/Material/angular-material/angular-material.module';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class LoaderModule { }
