import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event:any = [];

  constructor(private eventService: EventsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        this.eventService.getEvent(id)
          .then(events => {
            this.event = events;
            console.log(this.event)
          });
    })
  }

}
