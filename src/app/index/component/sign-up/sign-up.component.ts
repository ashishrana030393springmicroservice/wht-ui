import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers:[
    
  ]
})
export class SignUpComponent implements OnInit {
  gender:string[]=['MALE','FEMALE']
  constructor() { }

  ngOnInit(): void {
  }
  chooseYearHandler(e:any){
    console.log(e)
  }

}
