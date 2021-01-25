import {AfterViewInit, Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {SeoService} from '../../services/seo.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-terms-n-condition',
  templateUrl: './terms-n-condition.component.html',
  styleUrls: ['./terms-n-condition.component.scss']
})
export class TermsNConditionComponent implements OnInit, AfterViewInit {

  pageConfig = {
    title: 'Terms & conditions Efortles Business Accounting Solutions',
    description: 'Read more about Efortles\' terms and conditions. ' +
              'We offer business accounting solutions for small businesses. ' +
              'We\'ll help you manage your expenses so you can run your business.',
    keywords: '',
    pageUrl: 'terms-n-condition',
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

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {

  }

}
