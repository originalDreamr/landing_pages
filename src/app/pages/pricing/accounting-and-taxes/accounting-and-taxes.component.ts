import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../../../services/my-service.service';
import {SeoService} from '../../../services/seo.service';

@Component({
  selector: 'app-accounting-and-taxes',
  templateUrl: './accounting-and-taxes.component.html',
  styleUrls: ['./accounting-and-taxes.component.scss']
})
export class AccountingAndTaxesComponent implements OnInit {

  pageConfig = {
    title: 'Bookkeeping & Tax Services for Small Business New York - Efortles',
    description: 'Need help with bookkeeping and tax services for your small business? ' +
      'Efortles is located in New York and offers all-inclusive services.  Try now for free!',
    keywords: '',
    pageUrl: 'accounting-and-taxes',
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
