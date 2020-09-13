import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginFormData, RegisterFormData, User} from "../types/user";
import {BackendResponse} from "../../../shared/types/backendresponse";
import {Role} from "../types/role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken?: string;
  user?: User;
  userSubject = new BehaviorSubject<User>(this.user)
  jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient) {
    if (this.isLoggedIn() && this.user === undefined) {
      this.getProfile().subscribe(user => this.loadUser(user))
    }
  }

  registerUser = (user: RegisterFormData) : Observable<BackendResponse> => {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post<BackendResponse>(`${environment.backendUrl}/users/register`, user, {headers})
  }

  authenticateUser = (user: LoginFormData) : Observable<BackendResponse> => {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post<BackendResponse>(`${environment.backendUrl}/users/authenticate`, user, {headers})
  }

  getProfile = () : Observable<User> => {
    return this.httpClient.get<User>(`${environment.backendUrl}/users/profile`)
  }

  getUserRole = () : Role => {
    return this.user == null ? null : <Role>this.user.role;
  }

  storeUserData = (token: string, user: User) : void => {
    localStorage.setItem('token',token)
    this.authToken = token;
    this.loadUser(user);
  }

  loadToken = () : void => {
    this.authToken = localStorage.getItem('token')
  }

  loadUser = (user: User) => {
    this.user = user;
    this.userSubject.next(user);
  }

  logout = () : void => {
    this.authToken = null;
    this.loadUser(null);

    localStorage.clear()
  }

  isLoggedIn = () : boolean => {
    this.loadToken();
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

}
