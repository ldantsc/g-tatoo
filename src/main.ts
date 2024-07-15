import { bootstrapApplication } from '@angular/platform-browser';
import { inject } from '@vercel/analytics/*';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';

registerSwiperElements();
inject();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
