import { Routes } from '@angular/router';
import { MainComponent } from './pages/layout/main/main.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [{ path: '', component: MainComponent}, {path: 'gallery', component: GalleryComponent}];
