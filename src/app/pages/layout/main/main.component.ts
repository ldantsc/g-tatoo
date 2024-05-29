import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { QuoteComponent } from '../../quote/quote.component';
import { AboutComponent } from '../../about/about.component';
import { ContactComponent } from '../../contact/contact.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { RatingComponent } from '../../rating/rating.component';
import { InformationComponent } from '../../information/information.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    QuoteComponent,
    InformationComponent,
    RatingComponent,
    AboutComponent,
    ContactComponent,
    ButtonComponent,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {}
