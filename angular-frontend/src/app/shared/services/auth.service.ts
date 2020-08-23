import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService,
  ) { }

  registerUser = (user) => {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post('http://localhost:3000/api/users/register', user, {headers})
  }

  authenticateUser = (user) => {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post('http://localhost:3000/api/users/authenticate', user, {headers})
  }

  getProfile = () => {
    this.loadToken();
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization':this.authToken});

    return this.httpClient.get('http://localhost:3000/api/users/profile', {headers})
  }

  storeUserData = (token, user) => {
    this.cookieService.set('token',token, 7);
    this.cookieService.set('user', JSON.stringify(user), 7);
    this.authToken = token;
    this.user = user;
  }

  loadToken = () => {
    const token = this.cookieService.get('token');
    this.authToken = token;
  }

  logout = () => {
    this.authToken = null;
    this.user = null;

    this.cookieService.delete('token');
    this.cookieService.delete('user');
  }

  isLoggedIn = () => {
    this.authToken = this.cookieService.get('token');
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }
}
