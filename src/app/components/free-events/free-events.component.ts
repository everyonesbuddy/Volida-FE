import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { FreeEventsService } from 'src/app/services/free-events.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-free-events',
  templateUrl: './free-events.component.html',
  styleUrls: ['./free-events.component.scss'],
})
export class FreeEventsComponent implements OnInit {
  events: Entry<any>[] = [];

  constructor(
    private freeEventsService: FreeEventsService,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    //get all freeevents
    this.freeEventsService.getAllFreeEvents().then((events) => {
      this.events = events;
    });
  }

  detailPage(id: any) {
    this.router.navigate(['/freeEventsDetailPage/' + id]);
  }
}
