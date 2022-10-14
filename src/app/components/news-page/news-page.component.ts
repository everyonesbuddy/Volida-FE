import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  news: any = [];

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.newsService.getSingleNews(id).then((singleNews) => {
        this.news = singleNews;
      });
    });
  }
}
