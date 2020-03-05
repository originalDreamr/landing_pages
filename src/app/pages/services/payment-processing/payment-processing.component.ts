import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../../../services/my-service.service';
import {SeoService} from '../../../services/seo.service';

@Component({
  selector: 'app-payment-processing',
  templateUrl: './payment-processing.component.html',
  styleUrls: ['./payment-processing.component.scss']
})
export class PaymentProcessingComponent implements OnInit {

  pageConfig = {
    title: 'Payment Processing for Small Businesses',
    description: 'Efortles’ payment gateway allows you to reach customers on any device, at any time, from any location, ' +
      'so you can grow your business faster.',
    keywords: '',
    pageUrl: 'payment-processing',
  };
  constructor(
    public myService: MyServiceService,
    private seoService: SeoService,
  ) {
    this.seoService.setMeta(this.pageConfig);
  }

  ngOnInit(): void {
  }

}
