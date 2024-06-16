import { Component } from '@angular/core';
import { JsonData } from '../../models/json-data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  items!: JsonData;

  constructor(private _data: DataService) {}

  public getData = this._data.fetchDataJson()

  ngOnInit(): void {
    this.getData.subscribe((res) => (this.items = res));
  }
}
