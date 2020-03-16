import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MyServiceService} from '../../../services/my-service.service';
import {SeoService} from '../../../services/seo.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-payment-processing',
  templateUrl: './payment-processing.component.html',
  styleUrls: ['./payment-processing.component.scss']
})
export class PaymentProcessingComponent implements OnInit, AfterViewInit {

  pageConfig = {
    title: 'Payment Processing for Small Businesses',
    description: 'Efortles’ payment gateway allows you to reach customers on any device, at any time, from any location, ' +
      'so you can grow your business faster.',
    keywords: '',
    pageUrl: 'payment-processing',
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
