import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FreeEventsService {
  private client = createClient({
    space: environment.contentfulVolidaFreeEvents.spaceId,
    accessToken: environment.contentfulVolidaFreeEvents.token,
  });

  constructor(private http: HttpClient) {}

  getAllFreeEvents(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulVolidaFreeEvents.contentTypeIds.product,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getFreeEvent(eventId: any): Promise<Entry<any>> {
    // return this.http.post<{token: string, expiresIn: number, auth: any, error: any}>("https://volida-be.herokuapp.com/api/get-event-details", {id:eventId, userId:localStorage.getItem('_id')});
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulVolidaFreeEvents.contentTypeIds.product,
          },
          { 'sys.id': eventId }
        )
      )
      .then((res) => res.items[0]);
  }
}
