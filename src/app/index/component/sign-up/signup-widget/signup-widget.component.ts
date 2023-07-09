import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { SIGNUP_WIDGET } from 'src/app/core/constant/signup-widget.token';
import { SignupWidget } from 'src/app/core/interface/signup-widget.interface';
import { SignupWidgetService } from 'src/app/index/service/signup-widget.service';
import { NameWidgetComponent } from '../name-widget/name-widget.component';
import { DobGenderWidgetComponent } from '../dob-gender-widget/dob-gender-widget.component';
import { PasswordWidgetComponent } from '../password-widget/password-widget.component';
import { UsernameWidgetComponent } from '../username-widget/username-widget.component';
import { User } from 'oidc-client';
import { UserRegistration } from 'src/app/core/models/user-registration.model';

@Component({
  selector: 'app-signup-widget',
  templateUrl: './signup-widget.component.html',
  styleUrls: ['./signup-widget.component.scss'],
  providers: [],
})
export class SignupWidgetComponent implements OnInit {
  @ContentChild(SIGNUP_WIDGET as any)
  signupWidget: SignupWidget | undefined;
  user: UserRegistration = new UserRegistration();
  max: number = this.widgetService._length;
  step$ = this.widgetService.step$;
  constructor(
    private widgetService: SignupWidgetService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.signupWidget?.load();
    this.cdr.detectChanges();
  }

  onNext(index: number) {
    this.signupWidget?.refresh();
    if (this.signupWidget instanceof NameWidgetComponent) {
      this.user = { ...this.user, ...this.signupWidget.value() };
      if (this.signupWidget.valid()) {
        setTimeout(() => {
          this.widgetService.next();
        }, 1000);
      }
    }
    if (this.signupWidget instanceof DobGenderWidgetComponent) {
      this.user = { ...this.user, ...this.signupWidget.value() };
      if (this.signupWidget.valid()) {
        setTimeout(() => {
          this.widgetService.next();
        }, 1000);
      }
    }

    if (this.signupWidget instanceof UsernameWidgetComponent) {
      this.user = { ...this.user, ...this.signupWidget.value() };
      if (this.signupWidget.valid()) {
        setTimeout(() => {
          this.widgetService.next();
        }, 1000);
      }
    }
    if (this.signupWidget instanceof PasswordWidgetComponent) {
      this.user = { ...this.user, ...this.signupWidget.value() };
      // api call
      this.widgetService.complete(this.user).subscribe(res=> {
        // user regisration success page
      });
    }
  }

  get valid(): boolean | undefined {
    return this.signupWidget?.valid();
  }

  get refreshing(): boolean | undefined {
    return this.signupWidget?.isRefreshing;
  }
}
