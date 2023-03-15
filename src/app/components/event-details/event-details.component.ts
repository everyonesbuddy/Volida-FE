import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { TalkService } from 'src/app/services/talk.service';
import Talk from 'talkjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  event: any = [];
  amountInCents: any = '';
  hideVideolink: boolean = false;
  private inbox: Talk.Inbox | any;
  private session: Talk.Session | any;

  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;

  constructor(
    private subscriptionService: SubscriptionService,
    private eventService: EventsService,
    private activatedRoute: ActivatedRoute,
    private talkService: TalkService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // let id = params['id'];
      // this.eventService.getEventDetails(id).subscribe(events => {
      // this.event = events;
      // this.amountInCents = this.event.fields.amountInCents
      // this.hideVideolink = this.event.fields.hideVideolink;
      let id = params['id'];
      this.eventService.getEvent(id).then((events) => {
        this.event = events;
        this.amountInCents = events.fields.amountInCents;
        this.checkPayment().subscribe((res: any) => {
          res.subscriptions.forEach((val: any) => {
            if (!this.hideVideolink) {
              this.hideVideolink =
                val.amount == this.amountInCents &&
                val.amount_received == this.amountInCents;
            }
          });
          return res.subscriptions;
        });
      });
    });
    this.createInbox();
  }

  checkPayment(): any {
    return this.subscriptionService.checkPayment();
  }

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    // this.inbox.mount(this.talkjsContainer.nativeElement);
    setTimeout(
      function (thisobj: any) {
        thisobj.inbox.mount(thisobj.talkjsContainer.nativeElement);
      },
      3000,
      this
    );
  }
}
