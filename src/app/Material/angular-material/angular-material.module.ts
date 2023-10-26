import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardContent, MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const MATERIAL_COMPONENTS = [
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [
    //MATERIAL_COMPONENTS
  ],
  exports:[
    MATERIAL_COMPONENTS
  ]
})
export class AngularMaterialModule { }
