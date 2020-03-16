import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
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
    @Inject(PLATFORM_ID) private platformId,
    public myService: MyServiceService,
    private seoService: SeoService,
  ) {
    this.seoService.setMeta(this.pageConfig);
  }

  ngOnInit(): void {
  }

}
