import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlayerService {
  private spotifyApi : SpotifyWebApi.SpotifyWebApiJs;
  public track: any;

  constructor() {
    this.spotifyApi = new SpotifyWebApi;
  }

  ngOnInit(): void {
  }

  playTrack(uri: string): void {
    this.spotifyApi.play({ uris: [uri] });
  }
}
