import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('openClose2L', [
      // ...
      state('close', style({
        opacity: 0.9,
        transform: 'translate(-50%,100%)'
      })),
      state('open', style({
        opacity:1,
        transform: 'translate(-160%, 25%)'
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openClose1L', [
      // ...
      state('close', style({
        opacity: 0.9,
        transform: 'translate(-50%,100%)'
      })),
      state('open', style({
        opacity:1,
        transform: 'translate(-105%,15%)'
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openClose', [
      // ...
      state('close', style({
        opacity: 0.9,
        transform: 'translate(-50%,100%)'
      })),
      state('open', style({
        opacity:1,
        transform: 'translate(-50%,5%)'
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openClose1R', [
      // ...
      state('close', style({
        opacity: 0.9,
        transform: 'translate(-50%,100%)'
      })),
      state('open', style({
        opacity:1,
        transform: 'translate(5%,15%)'
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openClose2R', [
      // ...
      state('close', style({
        opacity: 0.9,
        transform: 'translate(-50%,100%)'
      })),
      state('open', style({
        opacity:1,
        transform: 'translate(60%,25%)'
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('inOutAnimation', [
      // ...
      transition(':leave', [
        style({
          opacity: 0,
          transform: 'translate3d(100%,0px,0px)'
        }),
        animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
      ]),
      transition(':enter', [
        style({
          opacity:1,
          transform: 'translate3d(0%,0px,0px)'
        }),
        animate('1s ease-out', 
                    style({  opacity: 1 }))
      ]),
      
    ]),
  ],
})
export class AboutComponent implements OnInit {
  expression:boolean=false
  expressiona:boolean = false;
  expressionb:boolean=false
  expressionc:boolean=false
  expressiond:boolean=false
  
  ob  = new IntersectionObserver(()=> {
    this.expression =true;
  });

  oba  = new IntersectionObserver(()=> {
    this.expressiona =true;
    this.expressionb =false;
    this.expressionc =false;
    this.expressiond =false;
    
  },{threshold:1});
  
  obb  = new IntersectionObserver(()=> {
    this.expressionb =true;
    this.expressiona = false;
    this.expressionc =false;
    this.expressiond =false;
  },{threshold:1});
  obc  = new IntersectionObserver(()=> {
    this.expressionc =true;
    this.expressiona = false;
    this.expressionb =false;
    this.expressiond =false;
  },{threshold:1});
  obd  = new IntersectionObserver(()=> {
    this.expressiond =true;
    this.expressiona = false;
    this.expressionb =false;
    this.expressionc =false;
  },{threshold:1});
 
  constructor() {

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    const watch:any = document.getElementById("watch");
    this.ob.observe(watch);
    const watcha:any = document.getElementById("watcha");
    this.oba.observe(watcha)
    const watchb:any = document.getElementById("watchb");
    this.obb.observe(watchb)
    const watchc:any = document.getElementById("watchc");
    this.obc.observe(watchc)
    const watchd:any = document.getElementById("watchd");
    this.obd.observe(watchd)
    
  }

}
