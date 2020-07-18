import { Injectable } from '@angular/core';
import {
   CanLoad,
   Route,
  UrlSegment, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  UrlTree,
Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, skipWhile, tap } from 'rxjs/operators';
import { AuthService }  from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private authService: AuthService, private router: Router){};

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.singnedin$.pipe(
      skipWhile(value => value === null),
      take(1),
      tap((authenticated) => {
          if(!authenticated){
            this.router.navigateByUrl('/');
          }
      })
    )
  }
}
