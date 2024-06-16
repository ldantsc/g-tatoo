import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JsonData } from '../../models/json-data';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingComponent {
  items!: JsonData;

  constructor(private _data: DataService) {}

  public getData = this._data.fetchDataJson()

  ngOnInit(): void {
    this.getData.subscribe((res) => (this.items = res));
  }

  ngAfterViewInit() {
    register();
  }
}
