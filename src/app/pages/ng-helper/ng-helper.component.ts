import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../services/seo.service';

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
    pageUrl: 'http://localhost:4200/ng-helper'
  };
  constructor(private seoService: SeoService) {
    this.seoService.setMeta(this.pageConfig);
  }

  ngOnInit(): void {
  }

}
