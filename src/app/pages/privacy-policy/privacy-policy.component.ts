import { Component, OnInit, HostListener, Inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

import {MyServiceService} from '../../services/my-service.service';
import {SeoService} from '../../services/seo.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
	)]
})
export class PrivacyPolicyComponent implements OnInit, AfterViewInit {

	pageConfig = {
    title: 'Efortles Privacy Policy - Accounting & Bookkeeping Services',
    description: 'Your privacy is important to us. ' +
              'Read more about Efortles\' privacy policy.  ' +
              'We offer business accounting and tax solutions for small businesses. Try now for free!',
    keywords: '',
    pageUrl: 'privacy-policy',
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

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {

  }

}
