import {AfterViewInit, Component, DoCheck, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {SeoService} from '../../services/seo.service';
import {RestApiService} from '../../services/rest-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Blog} from '../../models/Blog';
import {isPlatformBrowser} from '@angular/common';

/**
 * Share Button Component
 * https://github.com/MurhafSousli/ngx-sharebuttons/wiki/Share-Button-Component
 */
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
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
export class BlogComponent implements OnInit, AfterViewInit, DoCheck {
  apiFinished = false;
  pathName = null;
  // tslint:disable-next-line:ban-types
  blog = {
    title: '',
    content: '',
    updated_at: '',
    cover: '',
    description: '',
  };

  currentBlog: any;

  shareBtnExpanded = false;
  pageConfig = {
    title: 'Blog - Efortles Knowledge Base',
    description: 'Efortles believes in knowledge sharing to empower aspiring entrepreneurs, business owners and professionals.',
    keywords: '',
    pageUrl: this.seoService.siteUrl + 'blog/',
    pageCover: '',
  };
  schema = {
    '@context': 'http://schema.org',
    '@type': 'Blog',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': this.pageConfig.pageUrl // customize
    },
    headline: this.pageConfig.title, // customize
    image: [this.pageConfig.pageCover], // customize
    datePublished: this.blog.updated_at,
    dateModified: this.blog.updated_at, // '2019-12-20'
    author: {
      '@type': 'Organization',
      name: 'Efortles'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Efortles',
      logo: {
        '@type': 'ImageObject',
        url: this.seoService.siteLogo
      }
    },
    description: this.pageConfig.description, // customize
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private restService: RestApiService,
    public myService: MyServiceService,
    private seoService: SeoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.pathName = this.activatedRoute.snapshot.paramMap.get('pathName');
    let blogTitle = (this.pathName).replace(/-/g, ' ');
    blogTitle = blogTitle[0].toUpperCase() + blogTitle.slice(1);
    this.pageConfig.title = blogTitle + ' - Efortles Knowledge Base';
    this.pageConfig.pageUrl += this.pathName;
    this.seoService.setMeta(this.pageConfig);
    this.schema.headline = this.pageConfig.title;
  }

  ngOnInit(): void {
    // console.log('in ngOnInit..');
    this.getBlogDetail();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  ngDoCheck(): void {
    // console.log('in ngDoCheck..', this.apiFinished);
    // if (this.apiFinished) {
    //   this.pageConfig.title = 'blog - test - ngDoCheck';
    //   this.seoService.setMeta(this.pageConfig);
    // }
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
          this.pageConfig.title = res.title + ' - Efortles';
          this.pageConfig.description = res.description;
          this.pageConfig.pageUrl += res.path_name;
          this.pageConfig.pageCover += res.cover;

          this.seoService.setMeta(this.pageConfig);
          // set blog schema
          this.setBlogSchema();
          this.apiFinished = true;
        }, error => {
          // console.log('getBlogList:error', error);
          return {};
        });
    }
  }

  toggleShareBtn() {
    this.shareBtnExpanded = !this.shareBtnExpanded;
  }

  setBlogSchema() {
    this.schema.mainEntityOfPage['@id'] = this.seoService.siteUrl + this.pageConfig.pageUrl;
    this.schema.headline = this.pageConfig.title;
    this.schema.image[0] = this.pageConfig.pageCover;
    this.schema.datePublished = this.blog.updated_at;
    this.schema.dateModified = this.blog.updated_at;
    this.schema.publisher.logo.url = this.seoService.siteLogo;
    this.schema.description = this.pageConfig.description;
  }
}
