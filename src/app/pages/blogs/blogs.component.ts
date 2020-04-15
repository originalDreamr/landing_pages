import {AfterViewInit, Component, DoCheck, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {RestApiService} from '../../services/rest-api.service';
import {MyServiceService} from '../../services/my-service.service';
import {MyUtils} from '../../helpers/my-utils';
import {SeoService} from '../../services/seo.service';
import {ActivatedRoute} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '288px',
        opacity: 1,
        paddingLeft: '10px',
      })),
      state('closed', style({
        width: '0px',
        opacity: 0,
        paddingLeft: '0px',
      })),
      transition('open => closed', [
        animate('0.25s')
      ]),
      transition('closed => open', [
        animate('0.25s')
      ]),
    ]),
  ],
})
export class BlogsComponent implements OnInit, AfterViewInit, DoCheck {
  shareBtnExpanded = false;
  page = 1;
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private restService: RestApiService,
    public myService: MyServiceService,
    public myUtils: MyUtils,
    private seoService: SeoService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.seoService.setMeta(this.pageConfig);
  }

  pageConfig = {
    title: 'Efortles Knowledge Base - Efortles',
    description: 'Efortles believes in knowledge sharing to empower aspiring entrepreneurs, business owners and professionals.',
    keywords: '',
    pageUrl: this.seoService.siteUrl + 'blogs',
  };

  public blogList: [];

  pagination = {
    current_page: 1,
    page: this.page,
    last_page: 1,
  };


  ngOnInit(): void {
    const routeParamMap = this.activatedRoute.snapshot.paramMap;
    this.page = this.myUtils.getUrlParam(routeParamMap, 'page', 1, 'int');
    this.getBlogList(this.page);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  ngDoCheck(): void {
    const routeParamMap = this.activatedRoute.snapshot.paramMap;
    const currentPage = this.myUtils.getUrlParam(routeParamMap, 'page', 1, 'int');
    if (currentPage !== this.page) {
      this.page = currentPage;
      this.getBlogList(this.page);
    }
  }

  getBlogList(pageNum = 1) {
    const param = {
      page: pageNum,
    };
    this.restService.myHttp('GET', 'blogs', param)
      .subscribe(res => {
        this.blogList = res.data;
        this.pagination = res;
      }, error => {
        // console.log('getBlogList:error', error);
        return {};
      });
  }

  toggleShareBtn() {
    this.shareBtnExpanded = !this.shareBtnExpanded;
  }
}
