import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ConfigurationComponent } from './configuration/configuration.component';

//const routes: Routes = [{ path: "", component: HomeComponent }];
const routes: Routes = [{ path: "", component: ConfigurationComponent }];

@NgModule({
  declarations: [AppComponent, HomeComponent, ConfigurationComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
