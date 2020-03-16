import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {MyServiceService} from '../../services/my-service.service';

@Component({
  selector: 'app-ng-helper',
  templateUrl: './ng-helper.component.html',
  styleUrls: ['./ng-helper.component.scss']
})
export class NgHelperComponent implements OnInit {

  pageConfig = {
    title: 'This is the angular sample page!',
    description: 'introduce to angular description',
    keywords: 'keywords for angular introduction',
    pageUrl: 'ng-helper'
  };
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    public myService: MyServiceService,
    private seoService: SeoService
  ) {
    this.seoService.setMeta(this.pageConfig);
  }

  ngOnInit(): void {
  }

}
