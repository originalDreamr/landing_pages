import {Component, OnInit} from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {SeoService} from '../../services/seo.service';
import {RestApiService} from '../../services/rest-api.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private restService: RestApiService,
    public myService: MyServiceService,
    private seoService: SeoService,
  ) {
    this.seoService.setMeta(this.pageConfig);
  }

  pageConfig = {
    title: 'Blogs - Efortles',
    description: 'Blog description.',
    keywords: '',
    pageUrl: 'blogs',
  };
  public pagination = {};

  public blogList: [];

  ngOnInit(): void {
    this.getBlogList();
  }

  getBlogList() {
    this.restService.myHttp('GET', 'blogs', '')
      .subscribe(res => {
        console.log('getBlogList', res);
        this.pagination = res;
        this.blogList = res.data;
      }, error => {
        // console.log('getBlogList:error', error);
        return {};
      });
  }
}
