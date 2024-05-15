import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private readonly searchUrl = 'https://api.spotify.com/v1/search';

  constructor(private http: HttpClient) {}

  searchSongs(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.get(this.searchUrl + '?q=' + query + '&type=track', { headers: headers });
  }
}