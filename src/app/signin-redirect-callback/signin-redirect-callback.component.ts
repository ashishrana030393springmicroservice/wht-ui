import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signin-redirect-callback',
  template: `
    <p>
      signin-redirect-callback works!
    </p>
  `,
  styles: [
  ]
})
export class SigninRedirectCallbackComponent implements OnInit {

  constructor(private _authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    
      
  }

  ngAfterViewInit(){
   
    this._authService.completeLogin().then(user=>{
      this.router.navigate(['/'],{replaceUrl:true})
    })
  }

}
