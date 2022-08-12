import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful'
import { RecentStreamService } from 'src/app/services/recent-stream.service';
import { EventsService } from 'src/app/services/events.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { FeaturedActsService } from 'src/app/services/featured-acts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  events: Entry<any> [] = [];
  recentStreams: Entry<any> [] = [];
  featuredActs: Entry<any> [] = [];

  constructor(private eventService: EventsService, private recentStreamService: RecentStreamService, private featuredActsService: FeaturedActsService, private router: Router, private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    //get all events
    this.eventService.getAllEvents()
      .then(events => {
        this.events = events;
      });

      // get all On Demand And Recent Live Streams
      this.recentStreamService.getAllRecentLiveStreams()
        .then(recentStreams => {
          this.recentStreams = recentStreams
        })

        // get all Featured Act
      this.featuredActsService.getAllFeaturedActs()
      .then(featuredActs => {
        this.featuredActs = featuredActs
      })
  }

  detailPage(id:any){
    this.router.navigate(['/detailPage/'+id]);
  }

  recentStreamDetailPage(id: any) {
    this.router.navigate(['recentStreamPage/'+id]);
  }

}
