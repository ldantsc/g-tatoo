import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule, provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ViewportScroller } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling: 'enabled'
    })),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};


class MyNgModule {}
