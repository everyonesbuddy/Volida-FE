import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { EventsService } from 'src/app/services/events.service';
import { FreeEventsService } from 'src/app/services/free-events.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  events: Entry<any>[] = [];
  freeEvents: Entry<any>[] = [];
  recentStreams: Entry<any>[] = [];
  featuredActs: Entry<any>[] = [];

  constructor(
    private eventService: EventsService,
    private freeEventsService: FreeEventsService,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    //check subscription status
    this.subscriptionService.getSubscriptionStatus();

    //get all events
    this.eventService.getAllEvents().then((events) => {
      this.events = events;
    });
    //get all freeevents
    this.freeEventsService.getAllFreeEvents().then((freeEvents) => {
      this.freeEvents = freeEvents;
    });
  }

  paidEventsDetailPage(id: any) {
    this.router.navigate(['/detailPage/' + id]);
  }

  freeEventDetailPage(id: any) {
    this.router.navigate(['/freeEventsDetailPage/' + id]);
  }
}
