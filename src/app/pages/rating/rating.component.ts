import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from '../../services/data.service';
import { JsonData } from '../../models/json-data';
import { SwiperOptions } from 'swiper/types';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './rating.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RatingComponent implements OnInit {
  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;
  public swiperParams!: SwiperOptions;
  public items!: JsonData;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.items = this._data.contentData();
  }

  ngAfterViewInit() {
    this.swiperParams = {
      slidesPerView: 1,
      pagination: true,
      parallax: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      on: {
        init() {},
      },
    };
    Object.assign(this.swiperContainerRef.nativeElement, this.swiperParams);
    this.swiperContainerRef.nativeElement.initialize();
  }
}
