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
 expression:boolean =false; 

  images=[
    {
      id:'watcha',
      show:false,
      color:{
        main: '#9C56F6',
        title:'#9C56F6',
        description:'#a169ea'
      },
      src:"../../../../assets/images/png/kamal-fullstack.png",
      title:"it's nice to meet you.",
      description:"I am a fullstack web developer. I love to spend time learning new technologies."
    },
    {
      id:'watchb',
      show:false,
      color:{
        main: '#BE211F',
        title:'#BE211F',
        description:'#e04e4e'
      },
      src:"../../../../assets/images/png/kamal-frontend.png",
      title:"angular is the best.",
      description:"This page is developed using angular. Angular material is used for styling."
    },
    {
      id:'watchc',
      show:false,
      color:{
        main: '#31A350',
        title:'#31A350',
        description:'#5ae27f'
      },
      src:"../../../../assets/images/png/kamal-spring.png",
      title:"spring is awesome.",
      description:"spring boot starter dependencies are awesome for quick development of websites."
    },
    {
      id:'watchd',
      show:false,
      color:{
        main: '#017BE5',
        title:'#017BE5',
        description:'#3093e5'
      },
      src:"../../../../assets/images/png/additional.png",
      title:"database & additional tech skills.",
      description:"mysql, docker, typescript, html, css etc."
    }
  ]
  
  ob  = new IntersectionObserver(()=> {
    this.expression =true;
  });

  oba  = new IntersectionObserver(()=> {
    this.images.forEach(obj=> obj.show =false)
    this.images[0].show =true;
    
  },{threshold:1});
  
  obb  = new IntersectionObserver(()=> {
    this.images.forEach(obj=> obj.show =false)
    this.images[1].show =true;
    
  },{threshold:1});
  obc  = new IntersectionObserver(()=> {
    this.images.forEach(obj=> obj.show =false)
    this.images[2].show =true;
    
  },{threshold:1});
  obd  = new IntersectionObserver(()=> {
    this.images.forEach(obj=> obj.show =false)
    this.images[3].show =true;
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
