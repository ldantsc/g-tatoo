import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-slide-image',
  standalone: true,
  imports: [],
  templateUrl: './slide-image.component.html',
  styleUrl: './slide-image.component.scss',
})
export class SlideImageComponent {
  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>;

  slider: KeenSliderInstance | undefined;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: {
        perView: 2,
        spacing: 500,
      },
    });
    console.log(this.slider);
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
