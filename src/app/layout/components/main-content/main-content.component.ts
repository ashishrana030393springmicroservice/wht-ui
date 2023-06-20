import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserEvent } from '../../models/user-event';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  events = this.eventService.events;
  displayedColumns: string[] = ['title', 'when', 'description', 'action'];
  datasource: MatTableDataSource<UserEvent> | undefined;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events.subscribe((res) => {
      this.datasource = new MatTableDataSource<UserEvent>(res);
      this.datasource.filterPredicate = function (record, filter) {
        if (record && record.when) {
          const date: Date = new Date(filter);
          console.log(record.when.getTime() > date.getTime());
          console.log(
            'entry: ' + record.when.getTime() + ' filter: ' + date.getTime()
          );
          return record.when.getTime() < date.getTime();
        }
        return false;
      };
    });

    this.eventService.selectDateObs.subscribe((res) => {
      this.applyFilterEventRaise(res);
    });
  }
  delete(event: UserEvent) {
    this.eventService.removeEvent(event).then((res) => {});
  }

  applyFilterEventRaise(date: Date) {
    if (this.datasource) {
      this.datasource.filter = date.toDateString();
    }
  }
}
