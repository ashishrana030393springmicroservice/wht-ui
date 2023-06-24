import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { Route, RouterModule } from '@angular/router';
import { ToolbarModule } from '../shared/toolbar/toolbar.module';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';


export const routes:Route[]=[
  {
    path:'', component: IndexComponent, children:[
      {
        path: '', component: AboutComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    IndexComponent,
   
    HomeComponent,
        AboutComponent,
   

  ],
  imports: [
    ToolbarModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexModule { }
