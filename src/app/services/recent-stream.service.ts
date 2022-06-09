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

  getRecentLiveStreams(recentStreamId: any) {
    return this.http.post<{token: string, expiresIn: number, auth: any, error: any}>("http://volida-be.herokuapp.com/api/recentLiveStreams", {id:recentStreamId, paymentId:localStorage.getItem('_id')});
  }
}
