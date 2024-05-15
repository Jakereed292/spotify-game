import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private readonly searchUrl = 'https://api.spotify.com/v1/search';
  private spotifyApi : SpotifyWebApi.SpotifyWebApiJs;
  private token = localStorage.getItem('access_token');


  constructor(private http: HttpClient) {
    this.spotifyApi = new SpotifyWebApi;
    this.spotifyApi.setAccessToken(this.token);
  }

  searchSongs(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.get(this.searchUrl + '?q=' + query + '&type=track', { headers: headers });
  }

  playTrack(uri: string): void {
    this.spotifyApi.play({ uris: [uri] });
  }

}