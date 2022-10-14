import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  news: Entry<any>[] = [];

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    //get all events
    this.newsService.getAllNews().then((news) => {
      this.news = news;
    });
  }

  newsPage(id: any) {
    this.router.navigate(['/newsPage/' + id]);
  }
}
