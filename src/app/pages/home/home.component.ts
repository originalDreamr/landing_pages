import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {EventManager} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery';
import {MyServiceService} from '../../services/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    public myService: MyServiceService,
    private seoService: SeoService,
    private eventManager: EventManager,
    ) {
    this.seoService.setMeta(this.pageConfig);
  }

  pageConfig = {
    title: 'Small Business CPA & Bookkeeping Services New York - Efortles',
    description: 'If you are a small business looking for a CPA and ' +
      'bookkeeping services in New York, open your free account today. We\'ll help you manage expenses so you can run your business.',
    keywords: '',
    pageUrl: '',
  };

  slides = [
    {img: 'assets/home/home_ts-ralph_nee.png', head: 'Testimonials',
      desc: 'Can’t tell you how happy I am with EFORTles. They helped me replace QuickBooks and TurboTax, ' +
        'saving at least 30 hours each month of horrible accounting work. Priceless!',
      name: 'Ralph Nee', position: 'CEO of Guest Tribe Inc.'},
    {img: 'assets/home/home_ts-edward_kim.png', head: 'Testimonials',
      desc: 'If it weren’t for EFORTles, I would be totally lost and confused with my company’s financials. ' +
        'I am so pleased with their services.',
      name: 'Edward Kim', position: 'Owner of KORE Training Studio'},
    {img: 'assets/home/home_ts-james_mc_gee.png', head: 'Testimonials',
      desc: 'Absolutely wonderful! EFORTles lifted the giant accounting burden off my shoulders and ' +
        'freed up my time so I can focus on growing my business and working my clients.',
      name: 'James M. McGee', position: 'CEO of Cool Bee POS LLC'},
    {img: 'assets/home/home_ts-maggie_colangelo.png', head: 'Testimonials',
      desc: 'EFORTles service is just excellent! Everything is done seamlessly in the background and ' +
        'now I have perfect business financials all the time.',
      name: 'Maggie Colangelo', position: 'Partner of Coffee Monster Café'}
  ];

  @ViewChild('ngCarousel', { static: true }) ngCarousel: NgbCarousel;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
  slideActivate(ngbSlideEvent: NgbSlideEvent) {
    let activeId: number | string = this.ngCarousel.activeId + 1;
    // @ts-ignore
    activeId = activeId > 3 ? 0 : activeId;
    this.setCarouselIndicator(activeId);
    // console.log(ngbSlideEvent.source);
    // console.log(ngbSlideEvent.paused);
    // console.log(NgbSlideEventSource.INDICATOR);
    // console.log(NgbSlideEventSource.ARROW_LEFT);
    // console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select(item);
    this.setCarouselIndicator(this.ngCarousel.activeId);
  }
  setCarouselIndicator(index) {
    $('.carousel-indicators li').removeClass('active');
    $('.carousel-indicators li').eq(index).addClass('active');
  }
}
