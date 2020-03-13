import {Component, DoCheck, OnInit} from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {SeoService} from '../../services/seo.service';
import {RestApiService} from '../../services/rest-api.service';
import {MyUtils} from '../../helpers/my-utils';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  pathName = null;
  pageFullUrl = '';
  blog = {
    title: '',
    content: '',
    updated_at: '',
    cover: '',
  };

  shareBtnExpanded = true;
  pageConfig = {
    title: 'Blog - Efortles',
    description: 'Blog description.',
    keywords: '',
    pageUrl: 'blog/',
  };

  constructor(
    private restService: RestApiService,
    public myService: MyServiceService,
    public myUtils: MyUtils,
    private seoService: SeoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.seoService.setMeta(this.pageConfig);
  }


  ngOnInit(): void {
    this.pathName = this.activatedRoute.snapshot.paramMap.get('pathName');
    this.getBlogDetail();
  }

  getBlogDetail() {
    if (this.pathName === null) {
      // redirect to blog list page
      this.router.navigate(['/blogs']);
    } else {
      // console.log('pathName', this.pathName, 'blog/' + this.pathName);
      this.restService.myHttp('GET', 'blog/' + this.pathName)
        .subscribe(res => {
          // console.log('getBlogDetail', res);
          this.blog = res;
          this.pageConfig = {
            title: res.title + ' - Efortles',
            description: res.description,
            keywords: '',
            pageUrl: 'blog/' + res.path_name,
          };
          this.seoService.setMeta(this.pageConfig);
          this.pageFullUrl = this.seoService.siteUrl + this.pageConfig.pageUrl;
        }, error => {
          // console.log('getBlogList:error', error);
          return {};
        });
    }
  }

  toggleShareBtn(action) {
    this.shareBtnExpanded = action === 'open';
    console.log('shareBtnExpanded', this.shareBtnExpanded);
  }
}
