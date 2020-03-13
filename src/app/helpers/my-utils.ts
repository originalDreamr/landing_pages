import {Injectable} from '@angular/core';

@Injectable()
export class MyUtils {

  range(n: number): any[] {
    return Array(n);
  }

  rangeKeys(n: number): number[] {
    return [...Array(n).keys()];
  }

  arrayToUrlParam(param) {
    let paramLinkStr = '';
    if (Object.keys(param).length > 0) {
      const paramLink = [];
      // tslint:disable-next-line:forin
      for (const key in param) {
        paramLink.push(key + '=' + param[key]);
      }
      paramLinkStr = paramLink.join('&');
    }
    return paramLinkStr;
  }

  /**
   * get url param with default value
   */
  getUrlParam(routeParamMap, field, defaultValue, type = 'string') {
    const value = routeParamMap.get(field);
    return value === null ? defaultValue : (
      type === 'int' ? parseInt(value, 10) : value
    );
  }

  paramUrl(param, baseUrl) {
    baseUrl = typeof baseUrl === 'undefined' ? '' : baseUrl;
    const paramLinkStr = this.arrayToUrlParam(param);
    if (paramLinkStr.length > 0) {
      baseUrl += baseUrl.indexOf('?') >= 0 ? '&' : '?';
      baseUrl += paramLinkStr;
    }
    return baseUrl;
  }

  // @Deprecated
  paginationInit(pathName, param) {
    const lastPage = 1;
    pathName = this.resetPathName(pathName);
    const paramLink = this.paramUrl(param, pathName);
    return {
      last_page : lastPage,
      path_base : pathName,
      first_page_url : {page: 1},
      last_page_url : {page: lastPage},
    };
  }
  // @Deprecated
  setPagination(pathName, res, param) {
    pathName = this.resetPathName(pathName);
    const paramLink = this.paramUrl(param, pathName);
    const lastPage = res.hasOwnProperty('last_page') ? res.last_page : 1;
    return  {
      last_page : lastPage,
      path_base : pathName,
      first_page_url : {page: 1},
      last_page_url : {page: lastPage},
    };
  }

  resetPathName(pathName) {
    return pathName.indexOf('/') === 0 ? pathName : '/' + pathName;
  }
}
