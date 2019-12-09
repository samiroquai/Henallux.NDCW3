/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Shop } from '../models/shop';
@Injectable({
  providedIn: 'root',
})
class ShopsService extends __BaseService {
  static readonly GetPath = '/api/Shops';
  static readonly PostPath = '/api/Shops';
  static readonly GetByIdPath = '/api/Shops/{id}';
  static readonly PutPath = '/api/Shops/{id}';
  static readonly DeletePath = '/api/Shops/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ShopsService.GetParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * - `nom`:
   *
   * @return Success
   */
  GetResponse(params: ShopsService.GetParams): __Observable<__StrictHttpResponse<Array<Shop>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageIndex != null) __params = __params.set('pageIndex', params.pageIndex.toString());
    if (params.nom != null) __params = __params.set('nom', params.nom.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Shops`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Shop>>;
      })
    );
  }
  /**
   * @param params The `ShopsService.GetParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * - `nom`:
   *
   * @return Success
   */
  Get(params: ShopsService.GetParams): __Observable<Array<Shop>> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as Array<Shop>)
    );
  }

  /**
   * @param dto undefined
   */
  PostResponse(dto?: Shop): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Shops`,
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
   * @param dto undefined
   */
  Post(dto?: Shop): __Observable<null> {
    return this.PostResponse(dto).pipe(
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
      this.rootUrl + `/api/Shops/${id}`,
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
   * @param params The `ShopsService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `dto`:
   */
  PutResponse(params: ShopsService.PutParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Shops/${params.id}`,
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
   * @param params The `ShopsService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `dto`:
   */
  Put(params: ShopsService.PutParams): __Observable<null> {
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
      this.rootUrl + `/api/Shops/${id}`,
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
}

module ShopsService {

  /**
   * Parameters for Get
   */
  export interface GetParams {
    pageSize?: number;
    pageIndex?: number;
    nom?: string;
  }

  /**
   * Parameters for Put
   */
  export interface PutParams {
    id: number;
    dto?: Shop;
  }
}

export { ShopsService }
