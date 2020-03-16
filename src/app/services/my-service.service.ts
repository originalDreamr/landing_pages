import {AfterViewInit, Injectable} from '@angular/core';
import {EventManager} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {RestApiService} from './rest-api.service';
import {CookieService} from 'ngx-cookie-service';
import {first} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private currentUserSubject: BehaviorSubject<User>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private eventManager: EventManager,
    private restService: RestApiService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  spotsLimit = 1000;
  spotsLeft = 0;

  public getUserStatistic() {
    this.restService.myHttp('GET', 'userStatistic', '')
      .subscribe(
        res => {
          if (res.hasOwnProperty('spots_left')) {
            this.spotsLeft = res.spots_left;
          }
          if (res.hasOwnProperty('spots_limit')) {
            this.spotsLimit = res.spots_limit;
          }
        },
        error => {
          return {};
        });
  }

  public onPageClose() {
    // page close event: log out demo account
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser.hasOwnProperty('user_type')){
      if (currentUser.user_type === 1) {
        console.log('logout demo!');
        this.logOut();
      }
    }
    return true; // confirm('close?');
  }

  logOut() {
    this.restService.logout();
  }

  public showHomeVideo(event) {
    document.location.href = 'https://www.efortles.co/?act=demo';
    // this.loginDemo();
    // console.log('showHomeVideo', $(event.target).data('src'), $('#homeVideoFrame').length);
    // $('#homeVideoFrame').prop('src', $(event.target).data( 'src'));
    // console.log('showHomeVideo', $('#homeVideoFrame').data('src'), $('#homeVideoFrame').length);
    // $('#homeVideoFrame').prop('src', $('#homeVideoFrame').data( 'src'));
  }

  public loginDemo() {
    console.log('loginDemo');
    this.restService.myHttp('POST', 'webDemoLogin', '')
      .subscribe(
        res => {
          console.log('loginDemo', res);
          if (res.status) {
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            this.currentUserSubject.next(res.data);
            this.cookieService.delete('username');
            this.cookieService.delete('password');
            this.router.navigate(['/dashboard'], { queryParams: { siteTour: true } });
          }
        },
        error => {
          return {};
        });
  }
}
