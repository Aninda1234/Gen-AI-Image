import { Component } from '@angular/core';
import { ImageProcessingService } from '../image-processing.service';

@Component({
  selector: 'app-image-micro-motion',
  templateUrl: './image-micro-motion.component.html',
  styleUrls: ['./image-micro-motion.component.css']
})
export class ImageMicroMotionComponent {
  imageFile: File | null = null;
  microMotionVideoUrl: string = '';
  errorMessage: string = '';

  constructor(private imageProcessingService: ImageProcessingService) {}

  processImageMicroMotion(): void {
    if (!this.imageFile) {
      this.errorMessage = 'Please upload an image file';
      return;
    }

    this.imageProcessingService.imageMicroMotion(this.imageFile).subscribe(response => {
      if (response && response.data && response.data.video) {
        this.microMotionVideoUrl = 'data:video/mp4;base64,' + response.data.video;
      } else {
        this.errorMessage = 'Error processing image: No micro-motion video URL found in response';
      }
    }, error => {
      this.errorMessage = 'Error processing image: ' + error.message;
    });
  }

  handleFileInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.imageFile = target.files[0];
    }
  }
}
