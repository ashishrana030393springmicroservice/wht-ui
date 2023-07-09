import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SignupWidgetService } from '../../service/signup-widget.service';

export class CustomErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl<any> | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!control && control.dirty && control.invalid;
  }
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorMatcher,
    },
    SignupWidgetService
  ],
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    dob: '',
    gender: '',
    firstName: '',
    lastName: '',
    password: '',
  };

  step$ = this.widgetService.step$;

  constructor(private widgetService:SignupWidgetService) {}

  ngOnInit(): void {}
}
