import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApprovalGuard implements CanActivate {
  user;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.authService.userSubject.subscribe(user => this.user = user)
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getProfile().pipe(map((user:any) => {
      if (user.role === 'Employee' && !user.approved) {
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
