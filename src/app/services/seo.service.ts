import { Injectable } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {MetaLinkService} from './meta-link.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  public siteUrl = 'https://www.efortles.com/';
  public siteLogo = this.siteUrl + 'assets/logo@2x.png';

  constructor(private titleService: Title,
              private metaService: Meta,
              private metaLinkService: MetaLinkService) { }

  setMeta(pageConfig: object) {
    // @ts-ignore
    this.setTitle(pageConfig.title);
    // @ts-ignore
    this.setNameAttribute('description', pageConfig.description);
    // @ts-ignore
    this.setNameAttribute('keywords', pageConfig.keywords);
    // @ts-ignore
    let pageUrl = pageConfig.pageUrl;
    if (pageUrl.indexOf('https://') < 0) {
      pageUrl = this.siteUrl + pageUrl;
    }
    this.setMateLink(pageUrl);
    // this.setNameAttribute('twitter:title', seoConfig[page].title);
    // this.setNameAttribute('twitter:description', seoConfig[page].description);
    // this.setNameAttribute('twitter:image', seoConfig[page].image);
    // this.setPropertyAttribute('og:title', seoConfig[page].title);
    // this.setPropertyAttribute('og:description', seoConfig[page].description);
    // this.setPropertyAttribute('og:url', seoConfig[page].url);
    // this.setPropertyAttribute('og:image', seoConfig[page].image);
  }
  private setTitle(title: string) {
    return this.titleService.setTitle(title);
  }
  private setMateLink(pageUrl: string) {
    this.metaLinkService.addTag({ rel: 'canonical', href: pageUrl});
  }
  private setNameAttribute(attribute: string, value: string) {
    if (this.checkAttributeExist(attribute, 'name')) {
      this.metaService.updateTag({name: attribute, content: value});
    } else {
      this.metaService.addTag({name: attribute, content: value});
    }
  }
  private setPropertyAttribute(attribute: string, value: string) {
    if (this.checkAttributeExist(attribute, 'property')) {
      this.metaService.updateTag({property: attribute, content: value});
    } else {
      this.metaService.addTag({property: attribute, content: value});
    }
  }
  private checkAttributeExist(attribute: string, type: string) {
    return this.metaService.getTag(`${type}="${attribute}"`);
  }
}
