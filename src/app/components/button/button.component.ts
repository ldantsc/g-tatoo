import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() buttonType: string = '';
  @Input() buttonTitle: string = '';
}
