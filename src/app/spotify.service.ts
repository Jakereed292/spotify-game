import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private readonly searchUrl = 'https://api.spotify.com/v1/search';
  private token = localStorage.getItem('access_token');


  constructor(private http: HttpClient) {}

  searchSongs(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(this.searchUrl + '?q=' + query + '&type=track', { headers: headers });
  }

  getSongsByGenre(genre: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(this.searchUrl + '?q=:' + genre + '&type=playlist&limit=1', { headers: headers });
  }

  getTracks(playlistHref: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(playlistHref, { headers: headers });
  }
  
}