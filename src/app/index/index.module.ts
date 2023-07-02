import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { Route, RouterModule } from '@angular/router';
import { ToolbarModule } from '../shared/toolbar/toolbar.module';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DateModule } from '../shared/date/date.module';


export const routes:Route[]=[
  {
    path:'', component: IndexComponent, children:[
      {
        path: '', component: AboutComponent
      },
      {
        path:'signup',component:SignUpComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    IndexComponent,
   
    HomeComponent,
        AboutComponent,
        SignUpComponent,
  ],
  imports: [
    ToolbarModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    DateModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexModule { }
