import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import KeenSlder, { KeenSliderInstance } from 'keen-slider'

const animation = { duration: 25000, easing: (t: any) => t }

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
    @Input() slides: { text: string; color: string; }[] | undefined
    @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement> | undefined;

    slider: KeenSliderInstance | null = null

    ngAfterViewInit(){
      this.slider = new KeenSlder(this.sliderRef!.nativeElement, {
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        slides: {
          perView: 3,
          spacing: 150,
        }
      })
    }

    ngOnDestroy(){
      if(this.slider) this.slider.destroy()
    }
}
