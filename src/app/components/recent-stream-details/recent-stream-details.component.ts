import { Component, OnInit } from '@angular/core';
import { RecentStreamService } from 'src/app/services/recent-stream.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recent-stream-details',
  templateUrl: './recent-stream-details.component.html',
  styleUrls: ['./recent-stream-details.component.scss']
})
export class RecentStreamDetailsComponent implements OnInit {
  recentStream:any = [];

  constructor(private recentStreamService: RecentStreamService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        this.recentStreamService.getRecentLiveStreams(id)
          .then(recentStreams => {
            this.recentStream = recentStreams;
            console.log(this.recentStream)
          });
    })
  }

}
