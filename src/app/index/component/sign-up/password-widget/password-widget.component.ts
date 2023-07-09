import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonFunction } from '../common-function';
import { SignupWidget } from 'src/app/core/interface/signup-widget.interface';
import { SIGNUP_WIDGET } from 'src/app/core/constant/signup-widget.token';

@Component({
  selector: 'app-password-widget',
  templateUrl: './password-widget.component.html',
  styleUrls: ['./password-widget.component.scss'],
  providers:[
    {
      provide: SIGNUP_WIDGET,
      useExisting: PasswordWidgetComponent
    }
  ]
})
export class PasswordWidgetComponent extends CommonFunction implements OnInit , SignupWidget{
  visible: boolean = false;

  form: FormGroup = this.fb.group(
    {
      password: [, [Validators.required, Validators.minLength(8)]],
      confirm: [
        ,
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    },
    { validator: confirmPasswordValidator() }
  );

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {}

  visiblity(checked: boolean) {
    this.visible = !this.visible;
  }
  value():any{
    const value = {
      password: this.form.value.password
    }
    return value;
  }
  valid():boolean{
    return this.form.valid;
  }
}

function confirmPasswordValidator() {
  return (fg: FormGroup) => {
    const pwd = fg.controls['password'];
    const confirmPwd = fg.controls['confirm'];
    if (confirmPwd.errors && !confirmPwd.errors['confrim']) {
      return;
    }
    if (pwd.value !== confirmPwd.value) {
      confirmPwd.setErrors({ confirm: { valid: true } });
      console.log(confirmPwd.getError('confirm'));
    } else {
      confirmPwd.setErrors(null);
    }
  };
}
