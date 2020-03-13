import {Component, DoCheck, OnInit} from '@angular/core';
import {RestApiService} from '../../services/rest-api.service';
import {MyServiceService} from '../../services/my-service.service';
import {MyUtils} from '../../helpers/my-utils';
import {SeoService} from '../../services/seo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, DoCheck {

  page = 1;
  constructor(
    private restService: RestApiService,
    public myService: MyServiceService,
    public myUtils: MyUtils,
    private seoService: SeoService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.seoService.setMeta(this.pageConfig);
  }

  pageConfig = {
    title: 'Blogs - Efortles',
    description: 'Blog description.',
    keywords: '',
    pageUrl: 'blogs',
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

}
