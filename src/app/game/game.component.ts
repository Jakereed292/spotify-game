import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  authenticated = false;
  searchQuery: string = '';
  searchResults: any[] = [];
  topTrack: any;

  constructor(private authService: AuthService, 
              private spotifyService: SpotifyService) {}


  ngOnInit(): void {
      
  }
              
  login() {
    this.authService.getToken().subscribe(
      (response: any) => {
        const token = response.access_token;
        localStorage.setItem('access_token', token);
        this.authenticated = true;
      },
      (error) => {
        console.error('Authentication failed:', error);
      }
    );
  }

  search() {
    this.spotifyService.searchSongs(this.searchQuery).subscribe(
      (response: any) => {
        this.searchResults = response.tracks.items;
        this.topTrack = response.tracks.items[0];
        console.log(JSON.stringify(this.topTrack));
      },
      (error) => {
        console.error('Search failed:', error);
      }
    );
  }

}
