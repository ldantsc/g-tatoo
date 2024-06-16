import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonData } from '../models/json-data';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  jsonUrl: string;

  constructor(private http: HttpClient) {
    this.jsonUrl = 'assets/db.json';
  }

  fetchDataJson() {
    return this.http.get<JsonData>(this.jsonUrl).pipe(shareReplay(1))
  }
}
