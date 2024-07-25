import { Component, OnInit } from '@angular/core';
import { JsonData } from '../../models/json-data';
import { DataService } from '../../services/data.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  items!: JsonData;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.items = this._data.contentData();
  }
}
