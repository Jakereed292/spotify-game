import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Config } from './config';

//import * as account from '../assets/accounts.json';

@Injectable({
  providedIn: 'root'
})
export class ConfService {

  url: string = '/assets/accounts.json';
  constructor(private http:HttpClient) { }

  async inspectUser(username = 'andrew') {
    //let data = await this.http.get<Userprofile>(inspectUserUrl + username).toPromise();
    let userprofile = await this.http.get<Config>(this.url).toPromise();
    console.log(userprofile);
  }
}
