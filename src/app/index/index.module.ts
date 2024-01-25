import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { Route, RouterModule } from '@angular/router';
import { ToolbarModule } from '../shared/toolbar/toolbar.module';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/extras/about/about.component';
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
import { ContactModule } from '../shared/contact/contact.module';
import { QuotesModule } from '../shared/quotes/quotes.module';
import { DockerBlogComponent } from './component/extras/docker-blog/docker-blog.component';
import { GithubActionsBlogComponent } from './component/extras/github-actions-blog/github-actions-blog.component';
import { Junit5Component } from './component/extras/junit5/junit5.component';
import { SpringSecurityComponent } from './component/extras/spring-security/spring-security.component';

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
        path:'blog',
        component:DockerBlogComponent
      },
      {
        path:'github-actions',
        component:GithubActionsBlogComponent
      },
      {
        path:'junit5',
        component: Junit5Component
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
    DockerBlogComponent,
    GithubActionsBlogComponent,
    Junit5Component,
    SpringSecurityComponent,
  ],
  imports: [
    ToolbarModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DateModule,
    StepWiseInstructionModule,
    QuotesModule,
    ContactModule,

    RouterModule.forChild(routes),
  ],
})
export class IndexModule {}
