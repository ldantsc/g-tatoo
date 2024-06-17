import { NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import Swiper from 'swiper';
import { register } from 'swiper/element';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent {
  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;
  public swiperParams!: SwiperOptions;

  ngAfterViewInit() {
    this.swiperParams = {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        386: {
          slidesPerView: 3,
          spaceBetween: 150
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 30
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
