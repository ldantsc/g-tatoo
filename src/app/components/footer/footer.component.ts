import { Component, OnInit } from '@angular/core';
import { JsonData } from '../../models/json-data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  items!: JsonData;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.items = this._data.contentData();
  }
}
