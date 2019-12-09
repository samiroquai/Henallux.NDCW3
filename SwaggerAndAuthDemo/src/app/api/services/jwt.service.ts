/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { JwtToken } from '../models/jwt-token';
import { LoginModel } from '../models/login-model';
@Injectable({
  providedIn: 'root',
})
class JwtService extends __BaseService {
  static readonly LoginPath = '/api/Jwt';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param loginModel undefined
   * @return Success
   */
  LoginResponse(loginModel?: LoginModel): __Observable<__StrictHttpResponse<JwtToken>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = loginModel;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Jwt`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JwtToken>;
      })
    );
  }
  /**
   * @param loginModel undefined
   * @return Success
   */
  Login(loginModel?: LoginModel): __Observable<JwtToken> {
    return this.LoginResponse(loginModel).pipe(
      __map(_r => _r.body as JwtToken)
    );
  }
}

module JwtService {
}

export { JwtService }
