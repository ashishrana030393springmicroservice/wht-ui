import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-event-dialog',
  templateUrl: './new-event-dialog.component.html',
  styleUrls: ['./new-event-dialog.component.scss'],
})
export class NewEventDialogComponent implements OnInit {
  
  constructor(
    private matDialogRef: MatDialogRef<NewEventDialogComponent>,
   
  ) {}

  ngOnInit(): void {}
  
  dismiss() {
    this.matDialogRef.close(null);
  }
}
