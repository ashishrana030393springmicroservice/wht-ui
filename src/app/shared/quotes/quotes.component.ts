import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  
  static quote= "if you have problem with me text me if you don't have my number you don't know me well enough to have problem with me."
  constructor() { }

  ngOnInit(): void {
  }

}
