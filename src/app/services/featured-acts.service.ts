import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeaturedActsService {
  private client = createClient({
    space: environment.contentfulVolidaFeaturedActs.spaceId,
    accessToken: environment.contentfulVolidaFeaturedActs.token
  });

  constructor(private http: HttpClient) { }

  getAllFeaturedActs(query?: object): Promise<Entry<any>[]> {

    return this.client.getEntries(Object.assign({
      content_type: environment.contentfulVolidaFeaturedActs.contentTypeIds.product
    }, query))
      .then(res => res.items)
  }
}
