import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  pageConfig = {
    title: 'Page no found!',
    description: '',
    keywords: '',
    pageUrl: '404',
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
