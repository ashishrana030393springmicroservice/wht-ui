import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { DateField } from './date-field';
import { NgControl } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: DateComponent,
    },
  ],
})
export class DateComponent implements OnInit, MatFormFieldControl<DateField> {
  static nextId=0;
  _value: DateField | undefined;
  stateChanges = new Subject<void>();
  @HostBinding()
  id: string = `date-${DateComponent.nextId++}`;
  _placeholder: string = '';
  ngControl: NgControl | null = null;
  focused: boolean = false;
  _empty: boolean = false;
  @HostBinding('class.floated')
  get shouldLabelFloat(): boolean{
    return true;
   // return this.focused || !this.empty;
  }
  required: boolean = false;
  disabled: boolean = false;
  errorState: boolean = false;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;

  @ViewChildren(MatInput, {read:ElementRef})
  inputs!:QueryList<ElementRef>
  @ViewChildren(MatSelect, {read:ElementRef})
  select!:QueryList<ElementRef>
  describedBy?:string;

  constructor(private fm:FocusMonitor, private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    console.log(this.inputs)
   this.inputs.forEach(input=>{
    this.fm.monitor(input)
    .subscribe((focused=>{
      this.focused = !!focused;
      this.stateChanges.next();
      
    }))
   })
   this.select.forEach(s=>{
    this.fm.monitor(s).subscribe((focused)=>{
      this.focused = !!focused;
      this.stateChanges.next();
      
    })
   })
  this.cdr.detectChanges();

  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }
  onContainerClick(event: MouseEvent): void {
    this.inputs.forEach(input=> {
      this.fm.focusVia(input,'program')
    })
    this.select.forEach(s=> {
      this.fm.focusVia(s, 'program')
    })
  }

  @Input()
  set value(value: DateField) {
    this._value = value;
    this.stateChanges.next();
  }

  get value(): DateField |any {
    return this._value;
  }

  @Input()
  set placeholder(placeholder:string){
    this._placeholder = placeholder;
    this.stateChanges.next()
  }

  get placeholder():string{
    return this._placeholder;
  }

  get empty():boolean{
    const date = this.value as DateField
    return !date.day && !date.month && !date.year;
  }

  get months() {
    return [
      'January',
      'Feburary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }



  ngOnDestroy(){
    this.inputs.forEach(input=> {
      this.fm.stopMonitoring(input);  
      this.stateChanges.complete();
    })
    this.select.forEach(select=> {
      this.fm.stopMonitoring(select);  
      this.stateChanges.complete();
    })
  }
}
