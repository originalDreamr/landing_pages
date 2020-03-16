import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MyServiceService} from '../../../services/my-service.service';
import {SeoService} from '../../../services/seo.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-accounting-and-taxes',
  templateUrl: './accounting-and-taxes.component.html',
  styleUrls: ['./accounting-and-taxes.component.scss']
})
export class AccountingAndTaxesComponent implements OnInit, AfterViewInit {

  pageConfig = {
    title: 'Bookkeeping & Tax Services for Small Business New York - Efortles',
    description: 'Need help with bookkeeping and tax services for your small business? ' +
      'Efortles is located in New York and offers all-inclusive services.  Try now for free!',
    keywords: '',
    pageUrl: 'accounting-and-taxes',
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
