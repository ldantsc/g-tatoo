import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { inject } from '@vercel/analytics/*';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ButtonComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer id="contact"></app-footer>
    <app-button buttonType="whatsBtn"></app-button>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    inject();
  }
}
