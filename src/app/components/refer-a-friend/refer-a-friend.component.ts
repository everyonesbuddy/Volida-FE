import { Component, OnInit } from '@angular/core';
declare function refer(): void;
import { Router, NavigationEnd } from '@angular/router';
import { UrlService } from '../../services/url.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-refer-a-friend',
  templateUrl: './refer-a-friend.component.html',
  styleUrls: ['./refer-a-friend.component.scss']
})
export class ReferAFriendComponent implements OnInit {
  public previousUrl: any = '';
  public currentUrl: any = '';

  constructor(private router: Router, private urlService: UrlService) {
    refer();
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
      this.urlService.setPreviousUrl(this.previousUrl);
      if(this.currentUrl == '/referAFriend')
        window.location.reload();
    });
  }

}
