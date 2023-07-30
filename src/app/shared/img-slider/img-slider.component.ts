import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
})
export class ImgSliderComponent implements OnInit {
  @Input()
  images:string[] = [];
  @Input()
  height: string='';
  @Input()
  width: string='';
  @Input()
  unit:string='%';

  _current:number =  0;

  constructor() { }

  ngOnInit(): void {
  }

  next(){
    this._current = (this._current + 1) % this.size();
    console.log("next: " + this.current)
  }

  previous(){
    if(this._current == -1){
      throw Error("stack is empty")
    }
    else if (this._current ==0){
      this._current = this.size() -1;
    }
    else{
      this._current = (this._current -1 ) % this.size();
    }
    console.log("previouse: " + this.current)
  }

  isLast(){
    return this._current == this.end;
  }

  get end(){
    return this.size() -1;
  }

  get start(){
    return 0;
  }

  size():number{
    return this.images.length;
  }

  get current(){
    return this._current;
  }

}
