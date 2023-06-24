import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientAuthInterceptor } from './client-auth.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // {
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: ClientAuthInterceptor,
    //  multi: true
    // }
   ]
})
export class CoreModule { }
