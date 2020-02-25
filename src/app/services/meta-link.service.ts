import {Inject, Injectable, RendererFactory2, ViewEncapsulation} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MetaLinkService {

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document
  ) {}
  /**
   * Inject the State into the bottom of the <head>
   */
  addTag(tag: LinkDefinition, forceCreation?: boolean) {

    try {
      const renderer = this.rendererFactory.createRenderer(this.document, {
        id: '-1',
        encapsulation: ViewEncapsulation.None,
        styles: [],
        data: {}
      });

      const link = renderer.createElement('link');
      const head = this.document.head;
      const selector = this._parseSelector(tag);

      if (head === null) {
        throw new Error('<head> not found within DOCUMENT.');
      }
      // renderer.removeAttribute()
      Object.keys(tag).forEach((prop: string) => {
        return renderer.setAttribute(link, prop, tag[prop]);
      });

      // [TODO]: get them to update the existing one (if it exists) ?
      const children = head.children;
      // tslint:disable-next-line:prefer-for-of
      for (let idx = 0; idx < children.length; idx++) {
        if (children[idx].localName === 'link' && children[idx].rel === tag.rel) {
          renderer.removeChild(head, children[idx]);
        }
      }
      renderer.appendChild(head, link);

    } catch (e) {
      console.error('Error within linkService : ', e);
    }
  }

  private _parseSelector(tag: LinkDefinition): string {
    // Possibly re-work this
    const attr: string = tag.rel ? 'rel' : 'hreflang';
    return `${attr}="${tag[attr]}"`;
  }
}
export declare type LinkDefinition = {
  charset?: string;
  crossorigin?: string;
  href?: string;
  hreflang?: string;
  media?: string;
  rel?: string;
  rev?: string;
  sizes?: string;
  target?: string;
  type?: string;
} & {
  [prop: string]: string;
};
