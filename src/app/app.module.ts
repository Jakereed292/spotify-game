import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { GameComponent } from './game/game.component';
import { HttpClientModule } from "@angular/common/http";
import { JwtModule } from "@auth0/angular-jwt";
import { ConfigurationComponent } from './configuration/configuration.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

//const routes: Routes = [{ path: "", component: HomeComponent }];
const routes: Routes = [{ path: "", component: ConfigurationComponent }];
//const routes: Routes = [{ path: "", component: LeaderboardComponent }];

@NgModule({
  declarations: [AppComponent, HomeComponent, GameComponent, ConfigurationComponent, LeaderboardComponent],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        allowedDomains: ['example.com'], // Add your domain here
        disallowedRoutes: []
      }
    }),
    HttpClientModule, BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
