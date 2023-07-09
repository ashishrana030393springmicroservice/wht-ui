import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonFunction } from '../common-function';
import { SignupWidget } from 'src/app/core/interface/signup-widget.interface';
import { SIGNUP_WIDGET } from 'src/app/core/constant/signup-widget.token';

@Component({
  selector: 'app-name-widget',
  templateUrl: './name-widget.component.html',
  styleUrls: ['./name-widget.component.scss'],
  providers:[
    {
      provide: SIGNUP_WIDGET,
      useExisting: NameWidgetComponent
    }
  ]
})
export class NameWidgetComponent extends CommonFunction implements OnInit, SignupWidget {
  form: FormGroup = this.fb.group({
    firstName: [, Validators.compose([Validators.required])],
    lastName: [, Validators.compose([Validators.required])],
  });

  constructor(private fb: FormBuilder) {
    super();
  }
  value():any{
    const value = {...this.form.value}
    return value;
  }
  valid():boolean{
    return this.form.valid;
  }

  ngOnInit(): void {}
}
