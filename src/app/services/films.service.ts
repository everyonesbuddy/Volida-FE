import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private client = createClient({
    space: environment.contentfulVolidaFilms.spaceId,
    accessToken: environment.contentfulVolidaFilms.token,
  });

  constructor(private http: HttpClient) {}

  getAllFilms(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulVolidaFilms.contentTypeIds.product,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getFilm(filmId: any): Promise<Entry<any>> {
    // return this.http.post<{token: string, expiresIn: number, auth: any, error: any}>("https://volida-be.herokuapp.com/api/get-event-details", {id:eventId, userId:localStorage.getItem('_id')});
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulVolidaFilms.contentTypeIds.product,
          },
          { 'sys.id': filmId }
        )
      )
      .then((res) => res.items[0]);
  }
}
