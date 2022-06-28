import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event:any = [];
  amountInCents: any = '';
  hideVideolink: boolean = false;

  constructor(private subscriptionService: SubscriptionService, private eventService: EventsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        // let id = params['id'];
        // this.eventService.getEventDetails(id).subscribe(events => {
            // this.event = events;
            // this.amountInCents = this.event.fields.amountInCents
            // this.hideVideolink = this.event.fields.hideVideolink;
        let id = params['id'];
        this.eventService.getEvent(id)
          .then(events => {
            this.event = events;
            this.amountInCents = events.fields.amountInCents
             this.checkPayment().subscribe((res:any)=>{
              res.subscriptions.forEach((val:any)=>{
                if(!this.hideVideolink){
                  this.hideVideolink = (val.amount == this.amountInCents && val.amount_received == this.amountInCents);
                }
              })
              return res.subscriptions;
            })
          });
      })
    }

  onPayment(id: any) {
    this.subscriptionService.handlePayment(id);
  }

  checkPayment(): any {
    return this.subscriptionService.checkPayment();
  }


}
