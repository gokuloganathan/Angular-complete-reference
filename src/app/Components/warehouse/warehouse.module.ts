import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AngularMaterialModule } from 'src/app/Material/angular-material/angular-material.module';



@NgModule({
  declarations: [
    WarehouseComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class WarehouseModule { }
