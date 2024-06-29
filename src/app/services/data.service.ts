import { Injectable } from '@angular/core';
import { JsonData } from '../models/json-data';
import * as Data from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  jsonUrl: string;

  constructor() {
    this.jsonUrl = 'assets/db.json';
  }

  contentData() {
    return Data;
  }
}
