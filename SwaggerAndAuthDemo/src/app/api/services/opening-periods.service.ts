/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OpeningPeriod } from '../models/opening-period';
@Injectable({
  providedIn: 'root',
})
class OpeningPeriodsService extends __BaseService {
  static readonly GetPath = '/api/OpeningPeriods';
  static readonly GetByIdPath = '/api/OpeningPeriods/{id}';
  static readonly PutPath = '/api/OpeningPeriods/{id}';
  static readonly DeletePath = '/api/OpeningPeriods/{id}';
  static readonly GetByShopPath = '/api/OpeningPeriods/Shop/{shopId}';
  static readonly PostPath = '/api/OpeningPeriods/Shop/{shopId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  GetResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/OpeningPeriods`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  Get(): __Observable<null> {
    return this.GetResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  GetByIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/OpeningPeriods/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  GetById(id: number): __Observable<null> {
    return this.GetByIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `OpeningPeriodsService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `dto`:
   */
  PutResponse(params: OpeningPeriodsService.PutParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/OpeningPeriods/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `OpeningPeriodsService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `dto`:
   */
  Put(params: OpeningPeriodsService.PutParams): __Observable<null> {
    return this.PutResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  DeleteResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/OpeningPeriods/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  Delete(id: number): __Observable<null> {
    return this.DeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param shopId undefined
   * @return Success
   */
  GetByShopResponse(shopId: number): __Observable<__StrictHttpResponse<Array<OpeningPeriod>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/OpeningPeriods/Shop/${shopId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OpeningPeriod>>;
      })
    );
  }
  /**
   * @param shopId undefined
   * @return Success
   */
  GetByShop(shopId: number): __Observable<Array<OpeningPeriod>> {
    return this.GetByShopResponse(shopId).pipe(
      __map(_r => _r.body as Array<OpeningPeriod>)
    );
  }

  /**
   * @param params The `OpeningPeriodsService.PostParams` containing the following parameters:
   *
   * - `shopId`:
   *
   * - `dto`:
   */
  PostResponse(params: OpeningPeriodsService.PostParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/OpeningPeriods/Shop/${params.shopId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `OpeningPeriodsService.PostParams` containing the following parameters:
   *
   * - `shopId`:
   *
   * - `dto`:
   */
  Post(params: OpeningPeriodsService.PostParams): __Observable<null> {
    return this.PostResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module OpeningPeriodsService {

  /**
   * Parameters for Put
   */
  export interface PutParams {
    id: number;
    dto?: OpeningPeriod;
  }

  /**
   * Parameters for Post
   */
  export interface PostParams {
    shopId: number;
    dto?: OpeningPeriod;
  }
}

export { OpeningPeriodsService }
