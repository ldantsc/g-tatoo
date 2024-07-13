import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
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
