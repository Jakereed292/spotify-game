import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private clientId = 'f93ee27b14ba4566803836f1b5e58a5a';
  private redirectUri = 'http://localhost:4200/callback';
  private authUrl = 'https://accounts.spotify.com/authorize';
  private tokenUrl = 'https://accounts.spotify.com/api/token';
  private scope = 'user-read-playback-state user-modify-playback-state';

  constructor(private http: HttpClient, private router: Router) {}

  public login() {
    const params = new HttpParams()
      .set('client_id', this.clientId)
      .set('response_type', 'code')
      .set('redirect_uri', this.redirectUri)
      .set('scope', this.scope);

    window.location.href = `${this.authUrl}?${params.toString()}`;
  }

  public handleAuthCallback() {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      const body = new HttpParams()
        .set('grant_type', 'authorization_code')
        .set('code', code)
        .set('redirect_uri', this.redirectUri)
        .set('client_id', this.clientId)
        .set('client_secret', 'YOUR_SPOTIFY_CLIENT_SECRET');

      this.http.post(this.tokenUrl, body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).subscribe((response: any) => {
        localStorage.setItem('access_token', response.access_token);
        this.router.navigate(['/']);
      });
    }
  }

  public getAccessToken() {
    return localStorage.getItem('access_token');
  }

}
  /*
  private readonly spotifyTokenUrl = 'https://accounts.spotify.com/api/token';
  private readonly clientId = 'f93ee27b14ba4566803836f1b5e58a5a';
  private readonly clientSecret = '1e58c271cd5b4b53ba120abb19dd72b7';

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

}
*/

