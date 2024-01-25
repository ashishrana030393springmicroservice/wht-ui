import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes.component';



@NgModule({
  declarations: [
    QuotesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    QuotesComponent
  ]
})
export class QuotesModule { }
