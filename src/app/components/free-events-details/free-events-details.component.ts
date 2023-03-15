import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreeEventsService } from 'src/app/services/free-events.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-free-events-details',
  templateUrl: './free-events-details.component.html',
  styleUrls: ['./free-events-details.component.scss'],
})
export class FreeEventsDetailsComponent implements OnInit {
  event: any = [];

  constructor(
    private subscriptionService: SubscriptionService,
    private freeEventsService: FreeEventsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // let id = params['id'];
      // this.eventService.getEventDetails(id).subscribe(events => {
      // this.event = events;
      // this.amountInCents = this.event.fields.amountInCents
      // this.hideVideolink = this.event.fields.hideVideolink;
      let id = params['id'];
      this.freeEventsService.getFreeEvent(id).then((events) => {
        this.event = events;
      });
    });
  }

  checkPayment(): any {
    return this.subscriptionService.checkPayment();
  }
}
