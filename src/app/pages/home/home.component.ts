import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {EventManager} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isBrowser;

  pageConfig = {
    title: 'Small Business CPA & Bookkeeping Services New York - Efortles',
    description: 'If you are a small business looking for a CPA and ' +
      'bookkeeping services in New York, open your free account today. We\'ll help you manage expenses so you can run your business.',
    keywords: '',
    pageUrl: 'https://www.efortles.com',
  };
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private seoService: SeoService,
    private eventManager: EventManager,
    ) {
    this.seoService.setMeta(this.pageConfig);
    this.isBrowser = isPlatformBrowser(platformId);
  }


  ngOnInit(): void {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    if (this.isBrowser) {
      window.scrollTo(0, 0);
    }
  }
}
