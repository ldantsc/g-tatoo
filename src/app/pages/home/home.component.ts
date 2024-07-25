import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AsyncPipe, JsonPipe, NgOptimizedImage } from '@angular/common';
import { JsonData } from '../../models/json-data';
import { MatIconModule } from '@angular/material/icon';
import { SwiperComponent } from '../../components/swiper/swiper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    SwiperComponent,
    JsonPipe,
    AsyncPipe,
    NgOptimizedImage,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  items!: JsonData;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.items = this._data.contentData();
  }
}
