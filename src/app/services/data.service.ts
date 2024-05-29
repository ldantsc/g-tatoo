import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsonData } from '../models/json-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  jsonUrl: any;

  constructor(private http: HttpClient) {
    this.jsonUrl = 'assets/db.json';
  }

  fetchDataJson() {
    return this.http.get<jsonData>(this.jsonUrl);
  }
}
