import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserEvent } from '../../models/user-event';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-new-event-dialog',
  templateUrl: './new-event-dialog.component.html',
  styleUrls: ['./new-event-dialog.component.scss'],
})
export class NewEventDialogComponent implements OnInit {
  event: UserEvent = new UserEvent();
  fg: FormGroup = this.fb.group({
    title: [, Validators.required],
    when: [, Validators.required],
    description: [, Validators.required],
  });
  constructor(
    private matDialogRef: MatDialogRef<NewEventDialogComponent>,
    private fb: FormBuilder,
    private eventService: EventService
  ) {}

  ngOnInit(): void {}
  save() {
    if (this.fg.valid) {
      this.eventService.addEvent(this.event).then((res) => {
       
        this.matDialogRef.close(this.event);
      });
    }
  }
  dismiss() {
    this.matDialogRef.close(null);
  }
}
