import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('mobile-nav', [
      state('close-modal', style({
        transform: 'scale(1)'
      })),
      state('open-nav', style({
        transform: 'scale(2)',
        innerHeight: '40vh'
      })),
      transition('close-modal => open-nav', animate('10s')),
      transition('open-modal => close-nav', animate('10s'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event) {
        this.isOpen = false
      }
    })
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }
}
