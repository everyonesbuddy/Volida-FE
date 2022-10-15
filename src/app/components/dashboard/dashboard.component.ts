import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { EventsService } from 'src/app/services/events.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  events: Entry<any>[] = [];
  recentStreams: Entry<any>[] = [];
  featuredActs: Entry<any>[] = [];

  constructor(
    private eventService: EventsService,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    //get all events
    this.eventService.getAllEvents().then((events) => {
      this.events = events;
    });
  }

  detailPage(id: any) {
    this.router.navigate(['/detailPage/' + id]);
  }
}
