import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  userSubject = new BehaviorSubject(this.user)
  jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient) {
    if (this.isLoggedIn() && this.user === undefined) {
      this.getProfile().subscribe(res => this.loadUser(res))
    }
  }

  registerUser = (user) => {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(`${environment.backendUrl}/users/register`, user, {headers})
  }

  authenticateUser = (user) => {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(`${environment.backendUrl}/users/authenticate`, user, {headers})
  }

  getProfile = () => {
    return this.httpClient.get(`${environment.backendUrl}/users/profile`, {headers: this.addAuthorizedHeader()})
  }

  getUserRole = () => {
    return this.user == null ? null : this.user.role;
  }

  storeUserData = (token, user) => {
    localStorage.setItem('token',token)
    this.authToken = token;
    this.loadUser(user);
  }

  loadToken = () => {
    this.authToken = localStorage.getItem('token')
  }

  loadUser = (user) => {
    this.user = user;
    this.userSubject.next(user);
  }

  logout = () => {
    this.authToken = null;
    this.loadUser(null);

    localStorage.clear()
  }

  isLoggedIn = () => {
    this.loadToken();
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  addAuthorizedHeader = () => {
    this.loadToken();
    return new HttpHeaders({'Content-Type':'application/json', 'Authorization':this.authToken});
  }
}
