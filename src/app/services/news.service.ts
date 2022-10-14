import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private client = createClient({
    space: environment.contentfulVolidaNews.spaceId,
    accessToken: environment.contentfulVolidaNews.token,
  });

  constructor(private http: HttpClient) {}

  getAllNews(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulVolidaNews.contentTypeIds.product,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getSingleNews(newsId: any): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulVolidaNews.contentTypeIds.product,
          },
          { 'sys.id': newsId }
        )
      )
      .then((res) => res.items[0]);
  }
}
