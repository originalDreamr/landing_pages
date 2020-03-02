import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../../../services/my-service.service';
import {SeoService} from '../../../services/seo.service';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss']
})
export class IncomeTaxComponent implements OnInit {

  pageConfig = {
    title: '',
    description: '',
    keywords: '',
    pageUrl: 'income-tax',
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
