import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { jsonData } from '../../models/json-data';
import { MatIconModule } from '@angular/material/icon';
import { SliderComponent } from '../../components/slider/slider.component';
import { SwiperComponent } from '../../components/swiper/swiper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule,SwiperComponent, SliderComponent, JsonPipe, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  items: jsonData | any;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.fetchDataJson().subscribe((res) => (this.items = res));
  }
}
