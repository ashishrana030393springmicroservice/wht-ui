import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[DateComponent]
})
export class DateModule { }
