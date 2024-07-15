import { Routes } from '@angular/router';
import { MainComponent } from './pages/layout/main/main.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/main/main.component').then((m) => m.MainComponent),
  }
];
