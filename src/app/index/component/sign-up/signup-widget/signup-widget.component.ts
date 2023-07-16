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
import { EMPTY, EmptyError, catchError, of } from 'rxjs';
import { FormGroup } from '@angular/forms';

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
        this.widgetService.validatePersonalDetails(this.user)
        .pipe(catchError(err=>{
          if(this.signupWidget){
            this.signupWidget.isRefreshing = false;
            if(err.status==400){
              this.setError(this.signupWidget.formGroup(),err.error)
            }
          }
          return EMPTY;
        }))
        .subscribe(res=> {
          this.widgetService.next();
        })
        
      }
    }
    if (this.signupWidget instanceof DobGenderWidgetComponent) {
      this.user = { ...this.user, ...this.signupWidget.value() };
      if (this.signupWidget.valid()) {
        this.widgetService.validateBasicInfo(this.user)
        .pipe(catchError(err=>{
          if(this.signupWidget){
            this.signupWidget.isRefreshing = false;
            if(err.status==400){
              this.setError(this.signupWidget.formGroup(),err.error)
            }
          }
          return EMPTY;
        })).subscribe(res=> {
          this.widgetService.next();
        })
        
      }
    }

    if (this.signupWidget instanceof UsernameWidgetComponent) {
      this.user = { ...this.user, ...this.signupWidget.value() };
      if (this.signupWidget.valid()) {
        this.widgetService.validateUsername(this.user)
        .pipe(catchError(err=> {
          if(this.signupWidget){
            this.signupWidget.isRefreshing = false;
            if(err.status==400){
              this.setError(this.signupWidget.formGroup(),err.error)
            }
          }
          return EMPTY;
        })).subscribe(res=> {
          this.widgetService.next()
        })
      }
    }
    if (this.signupWidget instanceof PasswordWidgetComponent) {
      this.user = { ...this.user, ...this.signupWidget.value() };
      // api call
      this.widgetService.complete(this.user).pipe(catchError(err=>{
        if(this.signupWidget){
          this.signupWidget.isRefreshing = false;
          if(err.status==400){
            this.setError(this.signupWidget.formGroup(),err.error)
          }
        }
        return EMPTY;
      })).subscribe(res=> {
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

  setError(form:FormGroup, error:any){
    const keys:string[] = Object.keys(error);
    for(let key of keys){
      console.log(error)
      console.log(key)
      let msgs: string[] = error[key];
      let ssErrorMsg='';
      for(let i =0; i<msgs.length; i++){
        let msg = msgs[i];
        if(i!=msgs.length -2) msg = msg +",";
        ssErrorMsg += msg
        //form.reset();
      }
      form.get(key)?.setErrors({serverError: ssErrorMsg})
    }
  }
}
