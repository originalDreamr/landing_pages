import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {MyUtils} from '../helpers/my-utils';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  private baseURl = 'https://api.efortles.co/api/'; // https://www.efortles.com/v1/api/
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private returnUrl: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private myUtils: MyUtils,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/login';
  }

  getApiHeader() {
    let  Option = {};
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const currentUserObj = JSON.parse(currentUser);
      if (currentUserObj.hasOwnProperty('access_token')) {
        Option = {headers: new HttpHeaders({
            Authorization: 'Bearer ' + currentUserObj.access_token
          })};
      }
    }
    // console.log(Option);
    return Option;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  myAuthHttp(method, apiName, param = {}) {
    if ('post' === method.toLowerCase()) {
      return this.http.post<any>(this.baseURl + apiName, param, this.getApiHeader())
        .pipe(map(response => {
          // console.log('myHttp:post', response);
          return response;
        }));
    } else {
      return this.http.get<any>(this.baseURl + apiName, this.getApiHeader())
        .pipe(map(response => {
          // console.log('myHttp:get', response);
          return response;
        }));
    }
  }

  /**
   *
   * @param method
   * @param apiName
   * @param param
   */
  myHttp(method, apiName, param = {}) {
    // console.log('myHttp', this.baseURl + apiName, param)
    if ('post' === method.toLowerCase()) {
      return this.http.post<any>(this.baseURl + apiName, param)
        .pipe(map(response => {
          // console.log('myHttp:post', response);
          return response;
        }));
    } else {
      let apiUrl = this.baseURl + apiName;
      apiUrl = this.myUtils.paramUrl(param, apiUrl);

      // console.log('apiUrl', apiUrl);
      return this.http.get<any>(apiUrl)
        .pipe(map(response => {
          // console.log('myHttp:get', response);
          return response;
        }));
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('notificationOption');
    localStorage.removeItem('notificationOption1');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserData');
    localStorage.removeItem('c_cmp_pic');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
    // this.router.navigate([this.returnUrl]);
  }

  syncHttp(apiName) {
    return this.http.get(this.baseURl + apiName).toPromise()
      .then()
      .catch((error) => {
        const errorSub = throwError(error);
        errorSub.subscribe();
      });
  }
}
