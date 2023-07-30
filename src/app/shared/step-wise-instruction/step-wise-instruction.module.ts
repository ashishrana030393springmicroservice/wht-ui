import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepWiseInstructionComponent } from './step-wise-instruction.component';
import { MaterialModule } from '../material.module';
import { ImgSliderModule } from '../img-slider/img-slider.module';



@NgModule({
  declarations: [
    StepWiseInstructionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ImgSliderModule
  ],
  exports:[
    StepWiseInstructionComponent
  ]
})
export class StepWiseInstructionModule { }
