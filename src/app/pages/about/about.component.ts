import { Component, OnInit } from '@angular/core';
import { JsonData } from '../../models/json-data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  items!: JsonData;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.items = this._data.contentData()
  }
}
