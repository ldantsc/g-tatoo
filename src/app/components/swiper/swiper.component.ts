import { NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { PathLocationStrategy } from '@angular/common';
import { DataService } from '../../services/data.service';
import { JsonData } from '../../models/json-data';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent implements OnInit {
  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;
  public getData = this._data.fetchDataJson()
  public swiperParams!: SwiperOptions;
  public items!: JsonData;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.getData.subscribe((res) => (this.items = res));
  }

  ngAfterViewInit() {
    this.swiperParams = {
      slidesPerView: 3,
      spaceBetween: 168,
      loop: true,
      autoplay: {
        delay: 3800,
      },
      breakpoints: {
        450: {
          slidesPerView: 3,
          spaceBetween: 100
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 138,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 120,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 60
        },
        1336: {
          slidesPerView: 3,
          spaceBetween: 140
        }
      },
      on: {
        init(){

        }
      }
    }
    Object.assign(this.swiperContainerRef.nativeElement, this.swiperParams); // Add parameters to the Swiper
    this.swiperContainerRef.nativeElement.initialize()
  }
}
