import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEventDialogComponent } from '../new-event-dialog/new-event-dialog.component';

const SMALL_WIDTH_BREAKPOINT= 720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  isScreenSm:boolean = false;
  selected:any;
  constructor(private  breakPointObserver:BreakpointObserver, private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.breakPointObserver.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state:BreakpointState)=>{
      this.isScreenSm = state.matches
    })
  }

  openDialog(){
    let dialogRef = this.matDialog.open(NewEventDialogComponent,{
      width: '450px',

    });
    dialogRef.afterClosed().subscribe(result=> {
      console.log("add event dialog closed");
    })
    
  }
  
}
