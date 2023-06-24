import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-ecom';
  isLoggedIn:boolean =false; 
  constructor(private _authService:AuthService){
    this._authService.loginChanged$.subscribe(loggedIn=>{
      this.isLoggedIn = loggedIn;
    })
  }
  ngOnInit(){
    this._authService.isLoggedIn().then(loggedIn=>{
      this.isLoggedIn = loggedIn;
    })
  }

  toggle(){
    
  }
}
