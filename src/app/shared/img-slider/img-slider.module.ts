import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[ImgSliderComponent]
})
export class ImgSliderModule { }
