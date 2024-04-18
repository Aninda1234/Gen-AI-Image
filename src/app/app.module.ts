import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImageMicroMotionComponent } from './image-micro-motion/image-micro-motion.component';
import { ImageEnlargerComponent } from './image-enlarger/image-enlarger.component';
import { ImageColorizeComponent } from './image-colorize/image-colorize.component';
import { PhotoToThreedSlowComponent } from './photo-to-threed-slow/photo-to-threed-slow.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PicToLifeComponent } from './pic-to-life/pic-to-life.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageMicroMotionComponent,
    ImageEnlargerComponent,
    ImageColorizeComponent,
    PhotoToThreedSlowComponent,
    PicToLifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
