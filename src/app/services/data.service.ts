import { inject, Injectable } from '@angular/core';
import { JsonData } from '../models/json-data';
import * as Data from '../../assets/data.json';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  jsonUrl: string;
  #http = inject(HttpClient);

  constructor() {
    this.jsonUrl = 'assets/db.json';
  }

  contentData() {
    return Data;
  }

  charsetSetup() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/html; charset=UTF-8',
        'Set-Cookie': 'cookie-name=value; SameSite=None; Secure'
      }),
    };
    this.#http.post('/', httpOptions);
  }
}
