import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MyServiceService} from '../../../services/my-service.service';
import {SeoService} from '../../../services/seo.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-bookkeeping',
  templateUrl: './bookkeeping.component.html',
  styleUrls: ['./bookkeeping.component.scss']
})
export class BookkeepingComponent implements OnInit, AfterViewInit {

  pageConfig = {
    title: 'Bookkeeping & Account Management Services Small Businesses',
    description: 'Efortles offers free bookkeeping services and account management for small businesses. ' +
      'Our free bookkeeping app makes it easy to stay on top of your assets.',
    keywords: '',
    pageUrl: 'bookkeeping',
  };
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    public myService: MyServiceService,
    private seoService: SeoService,
  ) {
    this.seoService.setMeta(this.pageConfig);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
