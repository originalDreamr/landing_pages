import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {MyServiceService} from '../../services/my-service.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, AfterViewInit {
  pageConfig = {
    title: 'Accountants for Small Business New York - Business Account Services',
    description: 'We are an all-inclusive accounting and tax solution for small businesses in New York. ' +
      'Free CPA services to help you grow your small business. Try now for free!',
    keywords: '',
    pageUrl: 'features',
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
