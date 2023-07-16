import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepWiseInstructionComponent } from './step-wise-instruction.component';



@NgModule({
  declarations: [
    StepWiseInstructionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StepWiseInstructionComponent
  ]
})
export class StepWiseInstructionModule { }
