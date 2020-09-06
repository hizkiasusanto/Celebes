import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {catchError, map} from "rxjs/operators";
import {User} from "../types/user";
import {Role} from "../types/role";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let roles = next.data.roles as Array<Role>;
    return this.authService.getProfile().pipe(map((user: User) => {
      if (roles.includes(user.role)) {
        return true;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }), catchError(() => {
      this.router.navigate(['/home']);
      return of(false);
    }))
  }

}
