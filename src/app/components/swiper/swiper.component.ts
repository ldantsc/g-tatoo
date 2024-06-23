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
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        386: {
          slidesPerView: 3,
          spaceBetween: 150
        },
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
          slidesPerView: 3,
          spaceBetween: 150,
        },
        850: {
          slidesPerView: 3,
          spaceBetween: 150,
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
