import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {SeoService} from '../../services/seo.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit, AfterViewInit {

  pageConfig = {
    title: 'Podcast',
    description: '',
    keywords: '',
    pageUrl: 'podcast',
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
}
