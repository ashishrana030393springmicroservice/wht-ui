import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAppComponent } from './layout-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { NewEventDialogComponent } from './components/new-event-dialog/new-event-dialog.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes=[
  {
    path:'', component: LayoutAppComponent,
    children: [
      {
        path: '', component: MainContentComponent
      },

    ]
  },
  {
    path:"**",redirectTo:""
  }
]

@NgModule({
  declarations: [
    LayoutAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class LayoutModule { }
