import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import KeenSlder, { KeenSliderInstance } from 'keen-slider'

const animation = { duration: 3000, easing: (t: any) => t }

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
        drag: true,
        renderMode: "performance",
        slides: {
          perView: 3,
          spacing: 160,
        }
      },
      [
        (slider) => {
          let timeout: any
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 3000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ])
    }

    ngOnDestroy(){
      if(this.slider) this.slider.destroy()
    }
}
