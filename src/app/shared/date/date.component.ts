import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Optional,
  QueryList,
  Self,
  ViewChildren,
} from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { DateField } from './date-field';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { Observable, Subject, of, take } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { ErrorStateMatcher } from '@angular/material/core';
import { MONTHS } from 'src/app/core/models/month.model';

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
export class DateComponent
  implements OnInit, MatFormFieldControl<DateField>, ControlValueAccessor
{
  static nextId = 0;
  _value: DateField | undefined;
  stateChanges = new Subject<void>();
  @HostBinding()
  id: string = `date-${DateComponent.nextId++}`;
  _placeholder: string = '';
  focused: boolean = false;
  _empty: boolean = false;
  @HostBinding('class.floated')
  get shouldLabelFloat(): boolean {
    return true;
    // return this.focused || !this.empty;
  }
  required: boolean = false;
  disabled: boolean = false;
  get errorState(): boolean {
    return this.errorStateMatcher.isErrorState(
      this.ngControl.control as FormControl,
      null
    );
  }
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;

  @ViewChildren(MatInput, { read: ElementRef })
  inputs!: QueryList<ElementRef>;
  @ViewChildren(MatSelect, { read: ElementRef })
  select!: QueryList<ElementRef>;
  describedBy?: string;

  form: FormGroup = this.fb.group({
    day: [, [Validators.required]],
    month: [, [Validators.required]],
    year: [, [Validators.required]],
  });

  constructor(
    private fm: FocusMonitor,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private errorStateMatcher: ErrorStateMatcher,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  onChange?: (value: DateField) => void;
  onTouch?: () => void;

  writeValue(obj: DateField): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.form.disable();
    this.stateChanges.next();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      if (this.onChange) {
        this.onChange(value);
      }
    });
  }

  ngAfterViewInit() {
    this.inputs.forEach((input) => {
      this.fm.monitor(input).subscribe((focused) => {
        this.focused = !!focused;
        this.stateChanges.next();
      });
    });
    this.inputs.forEach((input) => {
      this.fm
        .monitor(input)
        .pipe(take(1))
        .subscribe((focused) => {
          if (this.onTouch) {
            this.onTouch();
          }
        });
    });
    this.select.forEach((s) => {
      this.fm.monitor(s).subscribe((focused) => {
        this.focused = !!focused;
        this.stateChanges.next();
      });
    });

    this.select.forEach((s) => {
      this.fm
        .monitor(s)
        .pipe(take(1))
        .subscribe((focused) => {
          if (this.onTouch) {
            this.onTouch();
          }
        });
    });
    this.cdr.detectChanges();
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }
  onContainerClick(event: MouseEvent): void {
    // this.inputs.forEach(input=> {
    //   this.fm.focusVia(input,'program')
    // })
    // this.select.forEach(s=> {
    //   this.fm.focusVia(s, 'program')
    // })
  }

  set value(value: DateField) {
    this.form.patchValue(value);
    this.stateChanges.next();
  }

  get value(): DateField | any {
    return this.form.value;
  }

  @Input()
  set placeholder(placeholder: string) {
    this._placeholder = placeholder;
    this.stateChanges.next();
  }

  get placeholder(): string {
    return this._placeholder;
  }

  get empty(): boolean {
    const date = this.value as DateField;
    return !date.day && !date.month && !date.year;
  }

  get months() {
    return MONTHS;
  }

  ngOnDestroy() {
    this.inputs.forEach((input) => {
      this.fm.stopMonitoring(input);
      this.stateChanges.complete();
    });
    this.select.forEach((select) => {
      this.fm.stopMonitoring(select);
      this.stateChanges.complete();
    });
  }
}
