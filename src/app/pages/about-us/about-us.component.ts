import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {SeoService} from '../../services/seo.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  pageConfig = {
    title: 'About Efortles.inc',
    description: '',
    keywords: '',
    pageUrl: 'about-us',
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
