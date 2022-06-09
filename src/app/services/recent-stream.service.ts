import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecentStreamService {
  private client = createClient({
    space: environment.contentfulVolidaRewatchEvents.spaceId,
    accessToken: environment.contentfulVolidaRewatchEvents.token
  });

  constructor(private http: HttpClient) { }

  getAllRecentLiveStreams(query?: object): Promise<Entry<any>[]> {
    
    return this.client.getEntries(Object.assign({
      content_type: environment.contentfulVolidaRewatchEvents.contentTypeIds.product
    }, query))
      .then(res => res.items)
  }
//random comment
  getRecentLiveStreams(recentStreamId: any): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
    content_type: environment.contentfulVolidaRewatchEvents.contentTypeIds.product
    }, {'sys.id': recentStreamId}))
    .then(res =>  res.items[0]);
  }
}
