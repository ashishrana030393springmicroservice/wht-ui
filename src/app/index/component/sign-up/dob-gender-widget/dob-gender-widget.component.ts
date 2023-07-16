import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { GENDER, GENDERS } from 'src/app/core/enum/gender.enum';
import { MONTH } from 'src/app/core/models/month.model';
import { CommonFunction } from '../common-function';
import { SignupWidget } from 'src/app/core/interface/signup-widget.interface';
import { SIGNUP_WIDGET } from 'src/app/core/constant/signup-widget.token';
import { DateField, DateUtils } from 'src/app/shared/date/date-field';

@Component({
  selector: 'app-dob-gender-widget',
  templateUrl: './dob-gender-widget.component.html',
  styleUrls: ['./dob-gender-widget.component.scss'],
  providers:[
    {
      provide: SIGNUP_WIDGET,
      useExisting: DobGenderWidgetComponent
    }
  ]
})
export class DobGenderWidgetComponent extends CommonFunction implements OnInit, SignupWidget {
  gender: GENDER[] = GENDERS.values;

  form: FormGroup = this.fb.group({
    dob: [{}, [validDate(),Validators.required]],
    gender: [, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {}

  value():any{
    const value = {
      dob: DateUtils.date(this.form.value.dob),
      gender: this.form.value.gender
    }
    return value;
  }

  valid():boolean{
    return this.form.valid;
  }
  formGroup():FormGroup{
    return this.form;
  }
}

function validDate(): ValidatorFn {
  return (control: AbstractControl) => {
    const day = control.value.day;
    const month: MONTH = control.value.month;
    const year = control.value.year;
    if (day == undefined || month == undefined || year == undefined) {
      return { dob: { valid: true } };
    }
    const date = year + '/' + month.value + '/' + (day.length==1 ? '0'+day: day);
    return moment(date, 'YYYY/MM/DD', true).isValid()
      ? null
      : {
          dob: {
            valid: true,
          },
        };
  };
}
