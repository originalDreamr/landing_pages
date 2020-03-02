import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../../../services/my-service.service';
import {SeoService} from '../../../services/seo.service';

@Component({
  selector: 'app-government-notice',
  templateUrl: './government-notice.component.html',
  styleUrls: ['./government-notice.component.scss']
})
export class GovernmentNoticeComponent implements OnInit {

  pageConfig = {
    title: '',
    description: '',
    keywords: '',
    pageUrl: 'government-notice',
  };
  constructor(
    public myService: MyServiceService,
    private seoService: SeoService,
  ) {
    this.seoService.setMeta(this.pageConfig);
  }w

  ngOnInit(): void {
  }

}
