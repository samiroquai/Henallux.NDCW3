import { Injectable } from '@angular/core';
import { JwtToken } from './api/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _accessToken: JwtToken;
  constructor() { }

  public setToken(token: JwtToken) {
    this._accessToken = token;
  }

  public getToken(): JwtToken {
    return this._accessToken;
  }

  public isAuthenticated(): boolean {
    return this._accessToken !== null && this._accessToken!==undefined;
  }
}
