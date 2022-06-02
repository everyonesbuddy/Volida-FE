import { Component, OnInit } from '@angular/core';
import { RecentStreamService } from 'src/app/services/recent-stream.service';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-recent-stream-details',
  templateUrl: './recent-stream-details.component.html',
  styleUrls: ['./recent-stream-details.component.scss']
})
export class RecentStreamDetailsComponent implements OnInit {
  recentStream:any = [];
  amountInCents: any = '';
  hideVideolink: boolean = false;

  constructor(private subscriptionService: SubscriptionService, private recentStreamService: RecentStreamService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        this.recentStreamService.getRecentLiveStreams(id)
          .then(recentStreams => {
            this.recentStream = recentStreams;
            this.amountInCents = recentStreams.fields.amountInCents
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
