import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {DOCUMENT} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {RestApiService} from '../../services/rest-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  // for control display on top limit spot that cause crash to node when redirect to 404 page
  isNormalPage = true;
  constructor(
    @Inject(DOCUMENT) document,
    public myService: MyServiceService,
    private router: Router,
    private restService: RestApiService
  ) {
    this.isNormalPage = this.router.url.substr(1) === '404' ? false : true;
    const currentUser = this.restService.currentUserValue;
    if (currentUser) {
      this.isLogin = true;
    }
  }

  ngOnInit(): void {
    if (this.isNormalPage) {
      this.myService.getUserStatistic();
    }
  }

  /**
   * page close event for logging out demo account
   */
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    // return this.myService.onPageClose();
  }
}
