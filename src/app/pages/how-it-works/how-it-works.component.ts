import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {SeoService} from '../../services/seo.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit, AfterViewInit {

  pageConfig = {
    title: 'Small Business Accounting Services New York - Small Business CPA',
    description: 'We are an all-inclusive accounting and tax solution provider ' +
      'for small businesses located in New York. We offer free CPA on-demand services. Try now for free!',
    keywords: '',
    pageUrl: 'how-it-works',
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
