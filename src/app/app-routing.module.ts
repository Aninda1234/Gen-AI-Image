import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoToThreedSlowComponent } from './photo-to-threed-slow/photo-to-threed-slow.component';
import { ImageMicroMotionComponent } from './image-micro-motion/image-micro-motion.component';
import { ImageEnlargerComponent } from './image-enlarger/image-enlarger.component';
import { ImageColorizeComponent } from './image-colorize/image-colorize.component';

const routes: Routes = [
  { path: 'photo-to-3d-slow-motion', component: PhotoToThreedSlowComponent },
  { path: 'image-micro-motion', component: ImageMicroMotionComponent },
  { path: 'image-enlarger', component: ImageEnlargerComponent },
  { path: 'image-colorize', component: ImageColorizeComponent },
  { path: '', redirectTo: '/photo-to-3d-slow-motion', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/photo-to-3d-slow-motion' } // Handle unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
