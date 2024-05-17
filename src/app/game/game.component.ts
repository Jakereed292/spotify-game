import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { SpotifyService } from '../spotify.service';
import { Config } from '../config';

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
  userGuess: string = '';
  correctGuess: boolean = false;
  guessGraded: boolean = false;
  songNum: number = 0;
  userScore: number = 0;
  quizCompleted: boolean = false;
  currentUser!: Config;
  resultarray:Config[] = [];
  disablestartbutton=false;

  constructor(private authService: AuthService, 
              private spotifyService: SpotifyService) {}


  ngOnInit(): void {
    this.login();
  }
              
  login() {
    this.authService.getToken().subscribe(
      (response: any) => {
        const token = response.access_token;
        localStorage.setItem('access_token', token);
        this.authenticated = true;

        this.currentUser = JSON.parse(localStorage.getItem('user') as string);

        this.genreQuery = this.currentUser.genre;
        this.quizSize = this.currentUser.questions;
        console.log(this.genreQuery);
      },
      (error) => {
        console.error('Authentication failed:', error);
      }
    );
  }

  searchGenre() {
    this.disablestartbutton=true;
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
        this.getRandomTracks();
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getRandomTracks() {
    let i = 0;
    let numsChosen: number[] = [];
    let songChoice;

    this.quizTracks = [];

    while(i < this.quizSize) {
      songChoice = Math.floor(Math.random() * this.tracks.length + 1);

      while(numsChosen.includes(songChoice) || this.tracks[songChoice] === undefined || this.tracks[songChoice].preview_url === undefined || this.tracks[songChoice].preview_url === null) {
        songChoice =  Math.floor(Math.random() * this.tracks.length + 1);
        
      }

      this.quizTracks.push(this.tracks[songChoice]);
      numsChosen.push(songChoice);
      i++;
    }

    console.log(this.quizTracks);

    if (this.quizTracks.length !== this.quizSize) {
      this.quizTracks = [];
      this.getRandomTracks();
    }
  }

  checkGuess(guess: string, correctTrackName: string, correctArtistName: string) { 
    if (correctTrackName.includes("-")) {
      correctTrackName = correctTrackName.split(" - ")[0];
    }

    if (correctTrackName.includes("(")) {
      correctTrackName = correctTrackName.split(" (")[0];
    }

    correctTrackName = correctTrackName.toLowerCase();
    correctArtistName = correctArtistName.toLowerCase();
    guess = guess.toLowerCase();

    if (guess.length !== correctTrackName.length) {
      this.guessGraded = true;
      return;
    }

    let differences = 0;
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] !== correctTrackName[i]) {
        differences++;
        if (differences > 3) {
          this.guessGraded = true;
          return;
        }
      }
    }

    this.correctGuess = true;
    this.guessGraded = true;
    this.userScore++;
  }

  nextQuestion() {
    this.songNum++;
    this.guessGraded = false;
    this.correctGuess = false;
    this.userGuess = "";

    if (this.songNum === this.quizTracks.length) {
      this.quizCompleted = true;
      this.currentUser.score = this.userScore;
      //
      if(JSON.parse(localStorage.getItem('resultarray') as string) === null)
        {
          this.resultarray.push(this.currentUser);
          localStorage.setItem("resultarray",JSON.stringify(this.resultarray));

        }
        else
        {
          this.resultarray = JSON.parse(localStorage.getItem('resultarray') as string);
          this.resultarray.push(this.currentUser);
          localStorage.setItem("resultarray",JSON.stringify(this.resultarray));
        }

    }
  }
}
