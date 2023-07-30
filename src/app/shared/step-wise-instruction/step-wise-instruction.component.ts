import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { StepWiseInstruction } from 'src/app/core/interface/step-wise-instruction';

@Component({
  selector: 'app-step-wise-instruction',
  templateUrl: './step-wise-instruction.component.html',
  styleUrls: ['./step-wise-instruction.component.scss'],
})
export class StepWiseInstructionComponent implements OnInit {
  @Input()
  instruction?: StepWiseInstruction;
  @Input()
  index: number=0;
  @Input()
  size:number=0;
  @Output()
  next$ = new EventEmitter<number>();
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {
    
    
  }

  ngOnInit(): void {
    
    
    
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  next(index: number) {
    this.next$.emit(index);
  }
}
