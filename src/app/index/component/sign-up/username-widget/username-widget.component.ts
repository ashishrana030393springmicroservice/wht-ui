import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonFunction } from '../common-function';
import { SignupWidget } from 'src/app/core/interface/signup-widget.interface';
import { SIGNUP_WIDGET } from 'src/app/core/constant/signup-widget.token';
@Component({
  selector: 'app-username-widget',
  templateUrl: './username-widget.component.html',
  styleUrls: ['./username-widget.component.scss'],
  providers: [
    {
      provide: SIGNUP_WIDGET,
      useExisting: UsernameWidgetComponent,
    },
  ],
})
export class UsernameWidgetComponent
  extends CommonFunction
  implements OnInit, SignupWidget
{
  form: FormGroup = this.fb.group({
    email: [, [Validators.required]],
  });
  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {}

  value():any{
    const value = {username: this.form.value.email}
    return value;
  }
  valid():boolean{
    return this.form.valid;
  }
  formGroup():FormGroup{
    return this.form;
  }
}
