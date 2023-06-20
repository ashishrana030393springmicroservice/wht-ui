import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output()
  toggleSideNav:EventEmitter<void> = new EventEmitter();
  today:string =new Date().toDateString()
  constructor(private matIconRegistry:MatIconRegistry) {
   // this.matIconRegistry.addSvgIcon()
   }

  ngOnInit(): void {
  }

}
