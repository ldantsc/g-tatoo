import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JsonData } from '../../models/json-data';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingComponent {
  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;
  public swiperParams!: SwiperOptions;
  public items!: JsonData;

  constructor(private _data: DataService) {}

  public getData = this._data.fetchDataJson()

  ngOnInit(): void {
    this.getData.subscribe((res) => (this.items = res));
  }


  ngAfterViewInit() {
    this.swiperParams = {
      slidesPerView: 1,
      pagination: true,
      parallax: true,
      loop: true,
      autoplay: {
        delay: 3000,
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
