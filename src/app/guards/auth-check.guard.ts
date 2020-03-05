import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {RestApiService} from '../services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckGuard implements CanActivate {
  constructor(
    private router: Router,
    private restService: RestApiService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.restService.currentUserValue;
    if (currentUser) {
      this.restService.myAuthHttp('GET', 'webUserDetails', '')
        .subscribe(
          res => {

          },
          error => {
            return {};
          });
    }
    return true;
  }



}
