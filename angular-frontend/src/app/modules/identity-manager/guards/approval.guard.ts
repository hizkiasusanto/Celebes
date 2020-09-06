import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {catchError, map} from "rxjs/operators";
import {User} from "../types/user";
import {Role} from "../types/role";

@Injectable({
  providedIn: 'root'
})
export class ApprovalGuard implements CanActivate {
  user? : User;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.authService.userSubject.subscribe(user => this.user = user)
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getProfile().pipe(map((user:User) => {
      if (user.role === Role.Employee && !user.approved) {
        this.router.navigate(['/approval_required']);
        return false;
      } else {
        return true;
      }
    }), catchError(() => {
      this.router.navigate(['/home']);
      return of(false);
    }))
  }

}
