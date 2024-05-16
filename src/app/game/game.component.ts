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
  searchResults: any[] = [];
  genreResults: any[] = [];
  genreQuery: string = '';
  playlist: any;
  tracks: any[] = [];
  numOfTracks: number = 0;
  quizSize: number = 0;
  quizTracks: any[] = [];

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

  searchGenre() {
    this.spotifyService.getSongsByGenre(this.genreQuery).subscribe(
      (response: any) => {
        this.genreResults = response.playlists.items;
        this.playlist = this.genreResults[0];
        this.getTracksFromPlaylist();
      },
      (error) => {
        console.error('Search failed:', error);
      }
    );
  }

  getTracksFromPlaylist() {
    this.spotifyService.getTracks(this.playlist.tracks.href).subscribe(
      (response: any) => {
        this.tracks = response.items;
        this.tracks = this.tracks.map((song: { track: any; }) => song.track);
        console.log(this.tracks);
        this.getRandomTracks(this.quizSize);
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getRandomTracks(quizSize: number) {
    let i = 0;
    let numsChosen: number[] = [];
    let songChoice;

    this.quizTracks = [];

    while(i < quizSize) {
      songChoice = Math.floor(Math.random() * this.tracks.length + 1);
      console.log(songChoice);

      while(numsChosen.includes(songChoice) && this.tracks[songChoice].preview_url === null) {
        songChoice =  Math.floor(Math.random() * this.tracks.length + 1);
      }

      this.quizTracks.push(this.tracks[songChoice]);
      numsChosen.push(songChoice);
      i++;
    }

    console.log(this.quizTracks);
  }
}
