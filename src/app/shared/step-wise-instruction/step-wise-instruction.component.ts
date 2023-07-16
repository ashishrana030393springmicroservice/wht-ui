import { Component, Input, OnInit } from '@angular/core';
import { StepWiseInstruction } from 'src/app/core/interface/step-wise-instruction';

@Component({
  selector: 'app-step-wise-instruction',
  templateUrl: './step-wise-instruction.component.html',
  styleUrls: ['./step-wise-instruction.component.scss']
})
export class StepWiseInstructionComponent implements OnInit {
  @Input()
  instructions:StepWiseInstruction[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
