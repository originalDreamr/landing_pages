import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../../../services/my-service.service';
import {SeoService} from '../../../services/seo.service';

@Component({
  selector: 'app-bookkeeping',
  templateUrl: './bookkeeping.component.html',
  styleUrls: ['./bookkeeping.component.scss']
})
export class BookkeepingComponent implements OnInit {

  pageConfig = {
    title: '',
    description: '',
    keywords: '',
    pageUrl: 'bookkeeping',
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
