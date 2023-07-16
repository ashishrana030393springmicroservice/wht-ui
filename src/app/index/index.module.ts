import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { Route, RouterModule } from '@angular/router';
import { ToolbarModule } from '../shared/toolbar/toolbar.module';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SignupComponent } from './component/sign-up/sign-up.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateModule } from '../shared/date/date.module';
import { SignupWidgetComponent } from './component/sign-up/signup-widget/signup-widget.component';
import { NameWidgetComponent } from './component/sign-up/name-widget/name-widget.component';
import { DobGenderWidgetComponent } from './component/sign-up/dob-gender-widget/dob-gender-widget.component';
import { UsernameWidgetComponent } from './component/sign-up/username-widget/username-widget.component';
import { PasswordWidgetComponent } from './component/sign-up/password-widget/password-widget.component';
import { StepWiseInstructionModule } from '../shared/step-wise-instruction/step-wise-instruction.module';

export const routes: Route[] = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    SignupWidgetComponent,
    NameWidgetComponent,
    DobGenderWidgetComponent,
    UsernameWidgetComponent,
    PasswordWidgetComponent,
  ],
  imports: [
    ToolbarModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DateModule,
    StepWiseInstructionModule,
    RouterModule.forChild(routes),
  ],
})
export class IndexModule {}
