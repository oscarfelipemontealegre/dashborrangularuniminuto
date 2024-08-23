import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  


  constructor(private _http: HttpClient) {

  }

  public registro(credentialsRegister: any) {
    const url = `https://gftggfz7-3000.use2.devtunnels.ms/api/auth/login`;
    return this._http.post(url, credentialsRegister);
  }
    }
