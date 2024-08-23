import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private _http: HttpClient) {

  }

  public login(credentials: any) {
    const url = `https://gftggfz7-3000.use2.devtunnels.ms/api/auth/login`;
    return this._http.post(url, credentials);
  }
    }

