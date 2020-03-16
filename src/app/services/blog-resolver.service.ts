import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Blog} from '../models/Blog';
import {RestApiService} from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class BlogResolverService implements Resolve<Blog> {
  pathName = '';
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blog> | Observable<never> {
    return this.restService.myHttp('get', 'blog/how-to-expand-your-business-online');
  }

  constructor(
    private restService: RestApiService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.pathName = this.activatedRoute.snapshot.paramMap.get('pathName');
  }
}
