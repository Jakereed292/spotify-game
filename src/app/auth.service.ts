import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly spotifyTokenUrl = 'https://accounts.spotify.com/api/token';
  private readonly clientId = 'f93ee27b14ba4566803836f1b5e58a5a';
  private readonly clientSecret = '1e58c271cd5b4b53ba120abb19dd72b7';

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  getToken() {
    const headers = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`
      }
    };

    const body = 'grant_type=client_credentials';

    return this.http.post(this.spotifyTokenUrl, body, headers);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}

